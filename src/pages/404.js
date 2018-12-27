import React from "react"
import Layout from "../components/layout"
import '../components/post.css'
import '../components/twitter-link.css'

export default ({ location }) => (
  <Layout>
    <div class="post">
      <h1>not found</h1>
      <p>You've found a page that isn't here.  Maybe head over to
      <Link to={'/ask'}>the contact form</Link> to tell me about it,
      or <a href="https://twitter.com/intent/tweet?text=@izs%20found%20a%20404%20on%20your%20website">
      tweet at me</a> about it.
    </div>
  </Layout>
)
