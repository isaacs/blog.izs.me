import React from "react"
import Layout from "../components/layout"
import Post from '../components/post.js'

export default ({ location }) => (
  <Layout>
    <Post slug={location.pathname} front={{
      type: 'page',
      slug: '404',
      title: 'not found'
    }} html={
    `<div style="text-align:center;font-size:2em;padding:2em">
      i looked but its not there
    </div>`}
    tweetText={'@izs 404 ' + location.href}
    />
  </Layout>
)
