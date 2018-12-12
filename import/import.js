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

// XXX do something interesting with trail and reblog stuff
const common = data => ({
  type: data.type,
  date: new Date(data.date),
  // must always have a slug
  slug: data.slug || sluggo(data.id),
  title: data.title || '',
  tumblrid: data.id,
  tags: data.tags,
  source: {
    title: data.reblogged_root_title,
    name: data.reblogged_root_name,
    url: data.reblogged_root_url,
  },
  via: {
    name: data.reblogged_from_name,
    title: data.reblogged_from_title,
    url: data.reblogged_from_url
  },
  redirects: [ `/post/${data.id}/${data.slug}`, `/post/${data.id}` ],
})

const audio = data => [
  {
    ...common(data),
    album_art: data.album_art,
    audio: {
      source_url: data.audio_source_url,
      type: data.audio_type,
      url: data.audio_url,
    },
    embed: data.embed,
    player: data.player,
    plays: data.plays,
    track_name: data.track_name,
  },
  data.caption
]

const bq = string => `> ${string.split('\n').join('\n> ')}`

// video is definitely gonna require some fancy reacty stuff
const video = data => {
  let d
  switch (data.video_type) {
    case 'youtube': d = videoYouTube(data) ; break
    case 'tumblr': d = videoTumblr(data) ; break
    // these just rely on the player html
    case 'vimeo': case 'instagram': case 'unknown': d = {} ; break
    default: throw new TypeError(`Unknown video type: ${data.video_type}`)
  }

  return [
    {
      ...common(data),
      ...d,
      video_type: data.video_type,
      thumbnail: {
        height: data.thumbnail_height,
        width: data.thumbnail_width,
        url: data.thumbnail_url
      },
      player: data.player,
      html5: data.html5_capable,
      permalink: data.permalink_url
    },
    data.caption
  ]
}

const videoYouTube = data => ({
  video: data.video,
})

const videoTumblr = data => ({
  video_url: data.video_url,
})



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

const photo = data => [
  {
    ...common(data),
    // I don't much care about all the alt size stuff
    link_url: data.link_url,
    photoset_layout: data.photoset_layout,
    photos: data.photos.map(p => ({
      alt: p.caption || undefined,
      height: p.original_size.height,
      width: p.original_size.width,
      url: p.original_size.url
    }))
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
      front.photos = front.photos.map(p => {
        if (urlexpr.test(p.url)) {
          p.url = `./${f}`
          found = true
        }
        return p
      })
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
    } else if (front.type === 'video') {
      if (urlexpr.test(front.thumbnail.url)) {
        front.thumbnail.url =
          front.thumbnail.url.replace(urlexpr, `./${f}`)
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
