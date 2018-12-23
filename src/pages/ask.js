import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div class="post">
      <h1>Ask me whatever</h1>
      <div class="postbody">
      <form action="https://formspree.io/i@izs.me" method="POST">
        <div>
          <label>from:
            <input placeholder="me@domain.com" name="from" type="email" />
          </label>
        </div>
        <div>
          <textarea name="message" rows="5" cols="30" required="true">
          </textarea>
        </div>
        <input type="submit" value="send it" />
      </form>
      </div>

    </div>
  </Layout>
)
