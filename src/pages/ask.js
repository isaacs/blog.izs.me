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
      `<form action="https://formspree.io/i@izs.me" method="POST" netlify>
        <div>
          <label>from:
            <input required placeholder="me@domain.com" name="from" type="email" />
          </label>
        </div>
        <div>
          <textarea name="message" rows="5" cols="30" required="true">
          </textarea>
        </div>
        <input type="submit" value="send it" />
      </form>

      <p>Whatever you post here gets emailed to me.  Please be nice.</p>
      `} />
  </Layout>
)
