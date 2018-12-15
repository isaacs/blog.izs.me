import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

import Media from "../components/media.js"
import yaml from "js-yaml"

export default ({ data }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  // XXX via and source links
  // Link posts
  return (
    <Layout>
      <div class="post {front.type || ''}">
        { (front.title) ? (<h1>{front.title}</h1>) : '' }
        <pre style={{ overflow:"auto", width:"100%" }}>{
          yaml.dump(front)
        }</pre>
        { front.type === 'video'
          ? <Media {...front.video} />
          : front.type === 'audio'
          ? <Media {...front.audio} />
          : '' }
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
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
        redirect_from # map from the tumblr urls

        # video content
        video {
          type
          url
          embed
        }

        # wont actually need this here once the plugin is doing its thing
        photos

        audio {
          album_art
          embed
          plays
          source_url
          track_name
          type
          url
        }

        # link posts
        link_url
        link_publisher
      }
    }
  }
`
