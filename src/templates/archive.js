import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default ({ pageContext }) => {
  const { archive } = pageContext
  return (
    <Layout>
      <div class="post">
        <ul>{
          Object.keys(archive).sort((a,b)=>b-a).map(y => (<li>
            {y}
            <ul>{
              Object.keys(archive[y]).sort((a,b)=>b-a).map(m => (<li>
                {y + '-' + m}
                <ul>{
                  archive[y][m].map(s => (<li>
                    <Link to={s}>{s.slice(9)}</Link>
                  </li>))
                }</ul>
              </li>))
            }</ul>
          </li>))
        }</ul>
      </div>
    </Layout>
  )
}
