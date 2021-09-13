const { dirname, resolve } = require('path')
const { readFileSync, writeFileSync, mkdirSync } = require('fs')
const sharp = require('sharp')
const url = require('url')
const https = require('https')
const cheerio = require('cheerio')
const cache = resolve(__dirname, '.cache')
const { createHash } = require('crypto')
const hash = s => createHash('sha512').update(s).digest('hex')

try {
  mkdirSync(cache)
} catch (e) {
  if (e.code !== 'EEXIST')
    throw e
}

const oembedAPI = {
  youtube: 'https://www.youtube.com/oembed?dnt=1&url=',
  vimeo: 'https://vimeo.com/api/oembed.json?dnt=1&url=',
  tiktok: 'https://www.tiktok.com/oembed?dnt=1&url=',
  soundcloud: 'https://soundcloud.com/oembed?dnt=1&format=json&url=',
  twitter: 'https://publish.twitter.com/oembed?dnt=1&url=',
}

const tumble = async (page, data) => {
  const dir = dirname(page.inputPath)
  const {
    photos,
    video,
    audio,
    youtube,
    vimeo,
    tiktok,
    twitter,
    soundcloud,
    videofile,
    maxWidth = 700,
  } = data

  const type = Array.isArray(photos) ? 'photoset'
    : tiktok ? 'tiktok'
    : youtube ? 'youtube'
    : vimeo ? 'vimeo'
    : soundcloud ? 'soundcloud'
    : video ? 'video'
    : audio ? 'audio'
    : videofile ? 'videofile'
    : twitter ? 'twitter'
    : null

  const urlDir = dirname(page.filePathStem)
  const arg = { page, dir, urlDir, maxWidth }
  const oembeds = Object.keys(oembedAPI)
  return type === 'photoset' ? await photoSet(arg, photos)
    : oembeds.includes(type) ? await oembed(arg, type, data[type])
    : type === 'video' ? await media(arg, video)
    : type === 'audio' ? await audioFile(arg, audio)
    : type === 'videofile' ? await videoFile(arg, videofile)
    : ''
}

const audioFile = async ({ page, dir, maxWidth, urlDir }, audio) => {
  const url = resolve(urlDir, audio)
  return `<audio style="width:${maxWidth}px;max-width:100%" controls src="${url}"></audio>`
}

const videoFile = async ({ page, dir, maxWidth, urlDir }, videofile) => {
  const { src, type = 'video/mp4' } =
    typeof videofile === 'string' ? { src: videofile } : videofile
  const url = resolve(urlDir, src)
  return `<video controls style="width:${maxWidth}px;max-width:100%">
    <source src="${url}" type="${type}">
  </video>`
}

const photoSet = async ({ page, dir, maxWidth, urlDir }, photos) => {
  const set = []
  for (let i = 0; i < photos.length; i++) {
    const row = photos[i]
    set[i] = []
    for (let j = 0; j < row.length; j++) {
      const p = row[j]
      const [f, ...alt] = p.split(' ')
      const file = resolve(dir, f)
      try {
        const meta = await sharp(file).metadata()
        set[i].push({
          file,
          url: resolve(urlDir, f),
          alt: alt.join(' ').replace(/"/g, "&quo;"),
          meta: meta
        })
      } catch (er) {
        console.error(`Error loading "${dir}/${f}"`)
        console.error(er)
      }
    }
  }

  return (set.length === 1 && set[0].length === 1)
    ? singlePhoto(set, maxWidth)
    : multiplePhotos(set, maxWidth)

  return require('util').inspect({ arg, photos })
}

const singlePhoto = (set, maxWidth) => {
  // just one photo, simple img tag will suffice
  const { url, alt, meta: { height, width }} = set[0][0]
  const scaleHeight = round(maxWidth / width * height, 4)
  const cls = `img-h${String(scaleHeight).replace(/\./g, '-')}`

  const style = `<style type="text/css">
img.${cls} {max-width:100%;width:${maxWidth}px;height:${scaleHeight}px;}
@media (max-width: ${maxWidth}px) {
  img.${cls} {max-width:100%!important;width:100%!important;height:auto!important;}
}</style>`
  const imgTag = `<img src="${url}" class="${cls}">`
  return style + imgTag
}

const multiplePhotos = (set, maxWidth)  => {
  const styles = {}
  const tableClass = `class="photosettable"`
  const tableProps = `${tableClass} cellpadding=0 cellspacing=0`
  const table = `<table ${tableProps}>`
  const rowcell = `<td class="rowcell">`
  const colcell = `<td class="colcell">`
  const rows = set.map(row => {
    const rowLen = row.length

    // spacing is 10px
    // total width is 700px
    // n: imgwidth
    // 1: 700 - 10 - 10 = 680
    // 2: (700 - 10 - 10 - 10)/2 = 335
    // 3: (700 - 10 - 10 - 10 - 10)/3 = 220
    // n: (700 - 10 - 10n)/n
    const imgWidth = (maxWidth - 10 - 10 * rowLen) / rowLen
    // get the scaled height of each photo
    row.forEach(photo => {
      const n = photo.meta.height * imgWidth/photo.meta.width
      photo.scaleHeight = round(n, 2)
    })
    const rowHeightNum = row.map(p => p.scaleHeight).sort()[0]
    // scale each to that maxWidth, then take the smallest height
    const rowHeight = rowLen === 1 ? 'auto' : (rowHeightNum + 'px')
    const widthCls = ('w-' + imgWidth).replace('.','-')
    const heightCls = ('h-' + rowHeight).replace('.', '-')

    const div = `<div class="photo ${widthCls} ${heightCls}">`
    styles[`.photosettable .${widthCls}`] = `width:${imgWidth}px`
    styles[`.photosettable .${heightCls}`] = `height:${rowHeight}`

    // If an image's scaled height H is larger than the rowHeight R,
    // then make it pos:rel, top:R/2, margin-top:-(H/2)
    // Do so with another wrapping div, so that it doesn't mess with the
    // gatsby-remark-image stuff which does funky positioning on the
    // image itself.
    const img = p => {
      const ret = `<a href="${p.url}" title="${p.alt}"><img width=${imgWidth}
        class="w-${imgWidth}"
        src="${p.url}" alt="${p.alt}"></a>`

      if (p.scaleHeight <= rowHeightNum)
        return ret

      const cls = `c-${rowHeightNum}-${p.scaleHeight}`
      styles[`.photosettable .${cls}`] = [
        `position:relative`,
        `height:${rowHeight}`,
        `top:${Math.floor(rowHeightNum/2)}px`,
        `margin-top:${-1*Math.floor(p.scaleHeight / 2)}px`,
      ].join(';')
      return `<div class="ctr ${cls}">${ret}</div>`
    }

    return `<tr>${rowcell}${table}<tr>${
      row.map(p => `${colcell}${div}${p.imgTag = img(p)}</div></td>`).join('\n')
    }</tr></table></td></tr>`
  }).join('\n')

  return `${writeCss(styles, maxWidth)}${table}${rows}</table>`
}

// TODO: write this to a file and load it on the pages containing that post
const writeCss = (styles, maxWidth) => {
  const overrides = readFileSync(__dirname + '/overrides.css', 'utf8')
    .replace(/\$\{width\}/g, maxWidth)
  const base = readFileSync(__dirname + '/base.css', 'utf8')
    .replace(/\$\{width\}/g, maxWidth)

  return `<style type="text/css">\n${base}\n${
    Object.entries(styles).map(([sel, style]) => `${sel}{${style}}`).join('\n')
  }\n${overrides}\n</style>`
}

const oembed = (arg, api, url) => {
  url = Array.isArray(url) ? url : [url]
  return Promise.all(url.map(url => new Promise((done) => {
    const oembedRoot = oembedAPI[api]
    const oe = oembedRoot + encodeURIComponent(url)
    const cacheFile = resolve(cache, hash(oe))
    try {
      done(readFileSync(cacheFile, 'utf8'))
    } catch (e) {}
    https.get(oe, res => {
      if (res.statusCode !== 200)
        return done('')

      const d = []
      res.setEncoding('utf8')
      res.on('data', c => d.push(c))
      res.on('end', () => {
        try {
          const e = JSON.parse(d.join(''))
          writeFileSync(cacheFile, e.html)
          done(e.html)
        } catch (er) {
          console.error('failed doing oembed', arg, er)
          /* istanbul ignore next */
          done('')
        }
      })
    })
  }).then(data => media(arg, data))))
    .then(content => content.join('\n'))
}

const media = ({ page, dir, urlDir, maxWidth }, embedHTML) => {
  const $ = cheerio.load(embedHTML)
  // try to set the width of the iframe/obj/embed the max width, and
  // scale up the height to match, if that's also set.
  mediaWidth($('object'), maxWidth)
  mediaWidth($('iframe'), maxWidth)
  mediaWidth($('embed'), maxWidth)
  mediaWidth($('video'), maxWidth)
  audioWidth($('audio'), maxWidth)
  return $('body').html()
}

const audioWidth = (node, width) => {
  if (node && node.length) {
    node.css('width', `${width}px`)
    node.css('max-width', `100%`)
  }
}

const round = (n, p) => Math.floor(n * Math.pow(10, p))/Math.pow(10,p)

const mediaWidth = (node, width) => {
  if (!node || !node.length)
    return

  const startWidth = node.attr('width')
  const startHeight = node.attr('height')

  const aspect = round(startHeight / startWidth, 2) * 100
  if (isNaN(aspect)) {
    // don't know both height and width, so just set the width
    // to 100% and hope for the best!  Note that this is rare in
    // most embeds, since they generally set the height and width
    // to get the right aspect ratio.
    node.attr('width', width)
    node.css('width', `${width}px`)
    node.css('max-width', `100%`)
    return
  }

  // Wrap in a pos:rel div that is:
  // width:100%
  // overflow:hidden
  // padding-top:(h/w * 100)px
  // Then the object or iframe is pos:abs,
  // top:0, left:0, width:100%, height:100%
  node.css('position', 'absolute')
  node.css('width', '100%')
  node.css('height', '100%')
  node.css('top', '0')
  node.css('left', '0')
  node.css('box-sizing', 'border-box')
  node.css('margin', '0')
  node.wrap('<div>', '</div>')
  const parent = node.parent()
  parent.css('width', '100%')
  parent.css('position', 'relative')
  parent.css('overflow', 'hidden')
  parent.css('padding', '0')
  parent.css('padding-top', `${aspect}%`)
}

module.exports = (page, data, cb) => tumble(page, data).then(html => cb(null, html), cb)
