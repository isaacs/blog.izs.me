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
    </div>
      <form action="https://formspree.io/i@izs.me" method="POST" netlify>
        <div>
          <label>from:
            <input placeholder="me@domain.com" name="from" type="email" required />
          </label>
        </div>
        <div>
          <textarea name="message" rows="5" cols="30" required="true">
found a 404 on your site: ${location.href}
          </textarea>
        </div>
        <input type="submit" value="send it" />
      </form>
    `}
    tweetLink={location.href}
    tweetText={'@izs 404 {URL}'}
    />
    <pre>{JSON.stringify(location, 0, 2)}</pre>
  </Layout>
)
