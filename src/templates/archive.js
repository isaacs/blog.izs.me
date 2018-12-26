import React from "react"
import Layout from "../components/layout"
import Post from '../components/post.js'

export default ({ pageContext }) => {
  const { archive, slug, title } = pageContext
  const html = `
    <ul>${
      Object.keys(archive).sort((a,b)=>b-a).map(y => `<li>
        ${y}
        <ul>${
          Object.keys(archive[y]).sort((a,b)=>b-a).map(m => `<li>
            ${y + '-' + m}
            <ul>${
              archive[y][m].map(s => `<li>
                <a href="${s}">${s.slice(9)}</a>
              </li>`).join('\n')
            }</ul>
          </li>`).join('\n')
        }</ul>
      </li>`).join('\n')
    }</ul>
  `

  return (
    <Layout>
      <Post slug={'/' + slug} front={{
        type:'page',
        slug,
        title,
      }} html={html} />
    </Layout>
  )
}
