import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Video from "../components/video.js"

export default ({ data }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  return (
    <Layout>
      <h1>{front.title}</h1>
      <pre>xxx {JSON.stringify(post, null, 2)}</pre>
      { front.type === 'video'
        ? <Video {...front.video} />
        : '' }
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      frontmatter {
        # common fields
        title # optional!
        type # text, link, photo, chat, answer, quote, video, audio
        date
        slug # just the texty bit of the slug, not the gatsby "slug"
        tumblrid
        tags
        redirects # map from the tumblr urls

        # video content
        video {
          type
          url
          embed
        }

        # link posts
        link_url
        link_publisher
      }
    }
  }
`
