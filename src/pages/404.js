import React from "react"
import Layout from "../components/layout"
import '../components/post.css'
import '../components/twitter-link.css'

export default ({ location }) => (
  <Layout>
    <div class="post">
      <h1>not found</h1>
      <form action="https://formspree.io/i@izs.me" method="POST" netlify>
        <div>
          <label>from:
            <input placeholder="me@domain.com" name="from" type="email" required />
          </label>
        </div>
        <div>
          <input type="hidden" name="location" value={location.href} />
          <textarea name="message" rows="5" cols="50" required="true" style={{
            width:'100%',
            height:'300px',
          }}>
          {'missing page on your site: ' + location.href}
          </textarea>
        </div>
        <input type="submit" value="send it" />
      </form>
    </div>
  </Layout>
)
