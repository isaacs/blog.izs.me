import React from "react"
import Layout from "../components/layout"
import Post from '../components/post.js'

export default () => (
  <Layout>
    <Post slug="/ask" front={{
      type:'page',
      slug:'ask',
      title:'Ask me whatever'
    }} html={
      `<p>Bye for now.  Maybe this page will come back once
      the trolls stop sending me links to holocaust gore.</p>

      <p>This is why we can't have nice things.</p>
      `} />
  </Layout>
)
