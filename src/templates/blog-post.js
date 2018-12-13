import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <h1>{post.frontmatter.title}</h1>
      <pre>xxx {JSON.stringify(post.frontmatter, null, 2)}</pre>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        # common fields
        title # optional!
        type # text, link, photo, chat, answer, quote, video, audio
        date
        slug # just the texty bit of the slug, not the gatsby "slug"
        tumblrid
        tags
        redirects # map from the tumblr urls

        # audio and video
        embed
        thumbnail {
          height
          url
          width
        }

        # video posts
        html5 # boolean
        permalink
        video_type
        video {
          youtube { # only youtube has this apparently?
            video_id
            height
            width
          }
        }
        video_url

        # link posts
        link_url
        link_publisher

        # audio posts
        album_art
        plays
        track_name

        # photo posts
        photoset_layout
        photos {
          url {
            absolutePath # these get turned into local file objects?
            relativePath
          }
          height
          width
          alt
        }
      }
    }
  }
`
