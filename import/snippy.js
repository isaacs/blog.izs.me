const fs = require('fs')
const dir = __dirname + '/snips'
const glob = require('glob')
const files = glob.sync(dir +'/20*/**/*.{md,markdown}')
const pages = __dirname + '/../src/pages/'
const mkdirp = require('mkdirp')
const { execSync:e } = require('child_process')

files.forEach(f => {
  const p = f.split('/')
  p.pop()
  const slug = p.pop()
  const date = new Date(`${p.pop()}T12:00:00-0800`)
  const md = fs.readFileSync(f, 'utf8')
  const lines = md.split('\n')
  const title = lines.shift().replace(/^#/, '').trim()
  const content = lines.join('\n').trim()
  const y = date.getFullYear()
  const m = `${(date.getMonth() < 10 ? '0' : '') + date.getMonth()}`
  const path = `${pages}/${y}/${m}/${slug}`
  const log = (e(`git log --oneline ${f}`, { cwd: dir }) + '')
    .trim()
    .split(/\n/).pop()
    .replace(/^[0-9a-f]{7}/, '').trim().replace(/\n/, ' ')
    .replace(/^Change to a new structure .*/, 'change to a new structure')
    .trim()

  if (!log)
    throw new Error(`no log on ${f}`)

  mkdirp.sync(path)

  const remark = `---
title: ${title}
slug: ${slug}
date: ${date.toISOString()}
tags:
  - snipsblog
  - ${log}
---
${content}

<small>[snip](https://github.com/isaacs/snips)</small>
`
  fs.writeFileSync(`${path}/index.md`, remark)
})
