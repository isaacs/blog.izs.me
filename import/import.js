#!/usr/bin/env node

const mkdirp = require('mkdirp')
const yaml = require('js-yaml')
const fs = require('fs')
const path = require('path')
const jsondir = `${__dirname}/izs/json`
const mediadir = `${__dirname}/izs/media`
const srcdir = `${path.dirname(__dirname)}/src/pages`
const mediaFiles = fs.readdirSync(mediadir)
const url = require('url')

// called at the bottom
const main = () => fs.readdirSync(jsondir)
  .filter(t => /^[^.].*\.json$/.test(t))
  .forEach(t => write(parse(require(`${jsondir}/${t}`))))

const pruneObj = filter => function f (obj) {
  return Object.keys(obj)
    .filter(k => filter(obj[k]))
    .sort()
    .map(k =>
      [k, obj[k] &&
        typeof obj[k] === 'object' &&
        !(obj[k] instanceof Date) ? f(obj[k]) : obj[k]])
    .reduce((set, [key, val]) => {
      set[key] = val
      return set
    }, Array.isArray(obj) ? [] : {})
}

const delUndef = pruneObj(x => x !== undefined)

const delEmpty = pruneObj(x =>
  !x || typeof x !== 'object' || x instanceof Date ||
  Object.keys(x).length > 0)

// [Object frontmatter, String content] => String remarkPost
const markify = ([frontmatter, content]) =>
`---
${yaml.safeDump(delEmpty(delUndef(frontmatter)))}---
${content}
`

// given a tumblr data, return [ Object frontmatter, String content ]
const parse = data => {
  switch (data.type) {
    case `link`: return link(data)
    case `photo`: return photo(data)
    case `text`: return text(data)
    case `chat`: return chat(data)
    case `answer`: return answer(data)
    case `quote`: return quote(data)
    case `video`: return video(data)
    case `audio`: return audio(data)
    default:
      console.error(data)
      throw new TypeError(`Unknown post type: ${data.type}`)
  }
}

const sluggo = n => Buffer.from([
  (n>>24)%256, (n>>16)%256, (n>>8)%256, n%256
]).toString('base64').replace(/=+$/, '')

const unredirect = u => {
  const p = url.parse(u || '', { parseQueryString: true })
  return (p.hostname === 't.umblr.com' &&
      p.pathname === '/redirect' &&
      p.query.z) ? p.query.z : u
}

// XXX do something interesting with trail and reblog stuff
const common = data => ({
  type: data.type,
  date: new Date(data.date),
  // must always have a slug
  slug: data.slug || sluggo(data.id),
  title: data.title || undefined,
  tumblrid: data.id,
  tags: data.tags,
  source: {
    title: data.source_title,
    url: unredirect(data.source_url)
  },
  via: {
    name: data.reblogged_from_name,
    title: data.reblogged_from_title,
    url: data.reblogged_from_url
  },
  redirect_from: [
    `/post/${data.id}/${data.slug}/`,
    `/post/${data.id}/`,
    `/post/${data.id}/${data.slug}`,
    `/post/${data.id}`
  ],
})

const audio = data => [
  {
    ...common(data),
    audio: data.embed,
  },
  data.caption
]

const bq = string => `> ${string.split('\n').join('\n> ')}`

// video is definitely gonna require some fancy reacty stuff
const video = data => {
  return [
    {
      ...common(data),
      // the main thing that counts here is the embed code
      // Tumblr does some fancy stuff with video embedding
      // sometimes, but I don't think I'm going to actually
      // write out that metadata, so screw it.  Just pick a
      // size when writing the post, and go with that.
      // Don't even really need the thumbnail bit.
      video: data.player.sort((a, b) => {
        return a.width - b.width
      }).pop().embed_code,
    },
    data.caption
  ]
}

const quote = data => [
  common(data),
  `${bq(data.text)}

${data.source ? data.source : ''}
`
]

const answer = data => [
  common(data),
`${bq(data.question)}
${data.asking_name ? (
  '-- _' +
  (data.asking_url ? '[' : '') +
  data.asking_name +
  (data.asking_url ? '](' + data.asking_url + ')' : '') +
  '_'
) :''}

${data.answer}
`
]


const chat = data => [
  common(data),
`|name|message|
|-----|-----|
` +
  data.dialogue.map(line => `| ${
    line.name ? '**'+line.name+'**' : ''
  } | ${line.phrase} |`).join('\n')
]

const photosetHtml = (layout, photos) => {
  // no layout specified when it's just a single photo, or in some cases
  // where it's just a series of photos with 1 in each row.
  // Act as if.
  if (!layout) {
    layout = new Array(photos.length + 1).join('1')
  }

  let html = '<div class="photoset" style="width:100%">\n'

  // tumblr's photo_layout is a list of numbers of how many photos
  // to put on each row.  make into a real number list.
  layout = Array.from(layout).map(n => +n)

  // XXX need to make this better somehow.
  let p = 0
  for (let row = 0; row < layout.length; row++) {
    const rowCount = layout[row]
    html += `  <div class="photoset_row photoset_row_${rowCount}" `
    // html += `style="width:100%;margin:0;padding:0;"`
    html += `style="margin:1ex"`
    html += `>`
    html += '\n'
    const w = Math.floor(99.5 / rowCount)
    for (let c = 0; c < rowCount; c++) {
      const photo = photos[p++]
      // html += `<img src=${photo.url} alt="${photo.alt || ''}" style="width:${w}%">`
      //html += `    <span class="photo" `
      //html += `style="display:inline-block;width:${w}%;margin:0;padding:0;">`
      //html += `<img src="${photo.url}" alt="${photo.alt || ''}" style="margin:0;padding:0">`
      //html += `</span>`
      html += `<img src="${photo.url}" alt="${photo.alt || ''}" style="width:100%">`
      html += '\n'
    }
    html += `  </div>` + '\n'
  }

  html += `</div>` + '\n'
  return html
}

const photolist = data => {
  if (data.photos.length === 1) {
    const p = data.photos[0]
    return [[
      `${p.original_size.url} ${p.caption}`.trim()
    ]]
  }

  // each entry in the array is a row in the photoset
  // each row can be either a single photo, or a list of photos
  const layout = data.photoset_layout.split('').map(n => +n)
  const ret = []
  let i = 0
  layout.forEach(rowCount => {
    if (rowCount === 1) {
      const p = data.photos[i++]
      ret.push([ `${p.original_size.url} ${p.caption}`.trim() ])
    } else {
      const row = []
      ret.push(row)
      while (rowCount --> 0) {
        const p = data.photos[i++]
        row.push(`${p.original_size.url} ${p.caption}`.trim())
      }
    }
  })
  return ret
}

const photo = data => [
  {
    ...common(data),
    link_url: data.link_url,
    photos: photolist(data),
  },
  data.caption
]

const text = data => [ common(data), data.body ]


const link = data => [
  {
    ...common(data),
    link_url: data.url,
    link_publisher: data.publisher,
  },
  data.description
]

// replace remote url links to local files from the media folder
// Copy each one into the post folder if found
const mediaify = ([ front, content ], postdir) => {
  let newContent = content
  mediaFiles.forEach(f => {
    let found = false
    const urlexpr = new RegExp('https?://[^"\'> ]+?/' + f + '\\b', 'g')
    if (urlexpr.test(newContent)) {
      found = true
      newContent = newContent.replace(urlexpr, `./${f}`)
    }

    if (front.type === 'photo') {
      front.photos = front.photos.map(row => row.map(p => {
        if (urlexpr.test(p)) {
          p = p.replace(urlexpr, `./${f}`)
          found = true
        }
        return p
      }))
    } else if (front.type === 'audio') {
      if (urlexpr.test(front.audio.source_url)) {
        front.audio.source_url =
          front.audio.source_url.replace(urlexpr, `./${f}`)
        found = true
      }
      if (urlexpr.test(front.audio.url)) {
        front.audio.url = front.audio.url.replace(urlexpr, `./${f}`)
        found = true
      }
    } else if (front.type === 'video' && front.video.thumbnail) {
      if (urlexpr.test(front.video.thumbnail.url)) {
        front.video.thumbnail.url =
          front.video.thumbnail.url.replace(urlexpr, `./${f}`)
        found = true
      }
    }

    if (found)
      fs.copyFileSync(`${mediadir}/${f}`, `${postdir}/${f}`)
  })
  return [ front, newContent ]
}

const write = ([ front, content ]) => {
  const YYYY = front.date.getUTCFullYear() + ''
  const m = front.date.getUTCMonth() + 1
  const MM = m < 10 ? `0${m}` : `${m}`
  const postdir = `${srcdir}/${YYYY}/${MM}/${front.slug}`
  mkdirp.sync(postdir)
  const markdown = markify(mediaify([front, content], postdir))
  fs.writeFileSync(`${postdir}/index.md`, markdown)
}

main()
