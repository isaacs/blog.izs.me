const g = require('glob')
const y = require('js-yaml')
const pages = g.sync('src/pages/**/*.md')
const fs = require('fs')

pages.forEach(f => {
  console.log(f)
  const content = fs.readFileSync(f, 'utf8')
  const split = content.split('---\n')
  const yaml = split[1]
  const md = split.slice(2).join('---\n')

  let data
  try {
    data = y.load(yaml)
  } catch (er) {
    console.log(yaml)
    throw er
  }

  if (data.tags) {
    data.tags = data.tags.map(t => t.toLowerCase())
  }
  fs.writeFileSync(f, `---
${y.dump(data).trim()}
---
${md}`)
})
