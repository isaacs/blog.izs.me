#!/usr/bin/env node

const mkdirp = require('mkdirp')
const yaml = require('js-yaml')
const fs = require('fs')
const jsondir = `${__dirname}/izs/json`

const deleteUndefined = obj =>
  Object.keys(obj)
    .filter(k => obj[k] !== undefined)
    .map(k =>
      [k, obj[k] && typeof obj[k] === 'object' && !(obj[k] instanceof Date) ? deleteUndefined(obj[k]) : obj[k]])
    .reduce((set, [key, val]) => {
      set[key] = val
      return set
    }, Array.isArray(obj) ? [] : {})

// [Object frontmatter, String content] => String remarkPost
const markify = ([frontmatter, content]) =>
`---
${yaml.safeDump(deleteUndefined(frontmatter))}---
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

// XXX do something interesting with trail and reblog stuff
const common = data => ({
  type: data.type,
  date: new Date(data.date),
  slug: data.slug,
  title: data.title || '',
  tumblrid: data.id,
  tags: data.tags,
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
    // XXX fetch these and swap out with local files in the post folder
    link_url: data.link_url,
    photoset_layout: data.photoset_layout,
    photos: data.photos.map(p => ({
      alt: p.caption,
      height: p.original_size.height,
      width: p.original_size.width,
      src: p.original_size.url
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

const go = data => {
  try {
    console.error(markify(parse(data)))
  } catch (er) {
    // if (!(er instanceof TypeError) || !/^Unknown post type: /.test(er.message))
      throw er
  }
}

const tumblrs = fs.readdirSync(jsondir)
  .filter(t => /^[^.].*\.json$/.test(t))

tumblrs.forEach(tumbl => go(require(`${jsondir}/${tumbl}`)))
