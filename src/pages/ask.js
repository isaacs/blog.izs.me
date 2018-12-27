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
      `<form name="AMA" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" netlify>
        <input type="hidden" name="form-name" value="AMA" />
        <div>
          <label>from:
            <input required placeholder="me@domain.com" name="from" type="email" />
          </label>
        </div>
        <div>
          <textarea name="message" rows="5" cols="50" required="true" style="width:100%;height:300px"></textarea>
        </div>
        <input type="submit" value="send it" />
      </form>

      <p>Whatever you post here gets emailed to me.  Please be nice.</p>
      `} />
  </Layout>
)
