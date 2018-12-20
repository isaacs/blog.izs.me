const sharp = require('sharp')
const path = require('path')
const cheerio = require('cheerio')

const photos = async ({ markdownNode, markdownAST, dir, width }) => {
  // 1. figure out height and width of each photo in the set
  // 2. figure out the appropriate width of each item in the row
  // 3. figure out the appropriate height of the row
  //
  // maybe go ahead and do this with tables because fuckit?
  // prepend the markup into the body, and let remark-images do the rest!
  //
  // Set the height and width of overflow-auto photoset_photo containers
  // Width is total content width / row item count
  // then scale each row item's effective height down equivalently to width
  // Height of row is shortest resulting image height
  // Then the images are set to width:100%,
  // and height truncated via css overflow:hidden
  //
  // total content width is 700px.  Overridable with an option.

  // turn list of 'url alt' into {url,alt}
  const set = []
  const photos = markdownNode.frontmatter.photos
  for (let i = 0; i < photos.length; i++) {
    const row = photos[i]
    set[i] = []
    for (let j = 0; j < row.length; j++) {
      const p = row[j]
      const meta = await sharp(path.resolve(dir, p.split(' ')[0])).metadata()
      set[i].push({
        file: path.resolve(dir, p.split(' ')[0]),
        url: p.split(' ')[0],
        alt: p.split(' ').slice(1).join(' ').replace(/"/g, "&quo;"),
        meta: meta
      })
    }
  }


  return (set.length === 1 && set[0].length === 1)
    ? singlePhoto(set)
    : photoSet(set, width)
}

const singlePhoto = set => {
  // just one photo, simple img tag will suffice
  const photo = set[0][0]
  const meta = photo.meta
  const imgTag = `
  <img src="${photo.url}"
    alt="${photo.alt}"
    height="${meta.height}"
    width="${meta.width}"
    style="max-width:100%">
  `
  return imgTag
}

const photoSet = (set, width)  => {
  const tableStyle = `style="border-collapse:collapse"`
  const tableProps = `${tableStyle} cellpadding=0 cellspacing=0`
  const table = `<table ${tableProps}>`
  const rowcell = `<td style="border:solid #fff; border-width:10px 0">`
  const colcell = `<td style="border:solid #fff; border-width:0 10px">`
  const rows = set.map(row => {
    const rowLen = row.length

    // spacing is 10px
    // total width is 700px
    // n: imgwidth
    // 1: 700 - 10 - 10 = 680
    // 2: (700 - 10 - 10 - 10)/2 = 335
    // 3: (700 - 10 - 10 - 10 - 10)/3 = 220
    // n: (700 - 10 - 10n)/n
    const imgWidth = (width - 10 - 10 * rowLen) / rowLen
    // scale each to that width, then take the smallest height
    const rowHeight = rowLen === 1 ? 'auto' : (Math.floor(row.map(photo =>
      photo.meta.height * imgWidth/photo.meta.width).sort()[0]) + 'px')
    // TODO: this doesn't work for /2014/10/thevoiceinthevoid-swedebeast
    // for some reason.
    const div = `<div class="photo"
      style="width:${imgWidth}px; height:${rowHeight}; overflow:hidden">`
    const img = p =>
      `<img src="${p.url}" alt="${p.alt}" style="width:100%">`

    return `<tr>${rowcell}${table}<tr>${
      row.map(p => `${colcell}${div}${img(p)}</div></td>`).join('\n')
    }</tr></table></td></tr>`
  }).join('\n')
  return `${table}${rows}</table>`
}

const media = ({ markdownNode, markdownAST, width }, embedHTML) => {
  const $ = cheerio.load(embedHTML)
  // try to set the width of the iframe/obj/embed the max width, and
  // scale up the height to match, if that's also set.
  const object = mediaWidth($('object'), width)
  const iframe = mediaWidth($('iframe'), width)
  const embed = mediaWidth($('embed'), width)
  return $('body').html()
}

const mediaWidth = (node, width) => {
  if (node && node.length) {
    const startWidth = node.attr('width')
    const startHeight = node.attr('height')
    const endHeight = startWidth && startHeight
      // scale up or down appropriately
      ? startHeight * width / startWidth
      : null
    node.attr('width', width)
    if (endHeight)
      node.attr('height', endHeight)
  }
}

module.exports = async ({ getNode, markdownNode, markdownAST }, pluginOptions) => {
  const width = pluginOptions.maxWidth || 700

  const parentNode = getNode(markdownNode.parent)
  // this won't work unless it's a markdown file
  if (!parentNode || !parentNode.dir) {
    return
  }
  const dir = parentNode.dir

  const front = markdownNode.frontmatter
  const arg = { markdownNode, markdownAST, dir, width }
  const html = Array.isArray(front.photos) ? await photos(arg, front.photos)
    : front.video && front.video.embed ? media(arg, front.video.embed)
    : front.audio && front.audio.embed ? media(arg, front.audio.embed)
    : null

  if (html) {
    markdownAST.children.unshift({
      type: `html`,
      value: `${html}`
    })
  }
}
