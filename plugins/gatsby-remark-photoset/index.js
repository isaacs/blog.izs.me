const sharp = require('sharp')
const path = require('path')

module.exports = async ({ getNode, markdownNode, markdownAST }, pluginOptions) => {
  const photos = markdownNode.frontmatter.photos
  if (Array.isArray(photos)) {
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
    const parentNode = getNode(markdownNode.parent)

    // this won't work unless it's a markdown file
    if (!parentNode || !parentNode.dir) {
      return
    }
    const dir = parentNode.dir

    // turn list of 'url alt' into {url,alt}
    const set = []
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


    if (set.length === 1 && set[0].length === 1) {
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
      markdownAST.children.unshift({
        type: `html`,
        value: imgTag
      })
    } else {
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
        const imgWidth = (700 - 10 - 10 * rowLen) / rowLen
        // scale each to that width, then take the smallest height
        const rowHeight = row.map(photo =>
          photo.meta.height * imgWidth/photo.meta.width).sort()[0]
        const div = `<div class="photo"
          style="width:${imgWidth}px; height:${rowHeight}px; overflow:hidden">`
        const img = p =>
          `<img src="${p.url}" alt="${p.alt}" style="width:100%">`

        return `<tr>${rowcell}${table}<tr>${
          row.map(p => `${colcell}${div}${img(p)}</div></td>`).join('\n')
        }</tr></table></td></tr>`
      }).join('\n')
      markdownAST.children.unshift({
        type: `html`,
        value: `${table}${rows}</table>`
      })
    }
  }
}
