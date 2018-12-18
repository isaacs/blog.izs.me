import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PagNav from '../components/pagnav.js'
import Post from '../components/post.js'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  return (
    <Layout>
      <Post slug={post.fields.slug} front={front}>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Post>

      <PagNav
        older={pageContext.nextPagePath}
        newer={pageContext.previousPagePath} />

    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      id
      fields {
        slug
      }
      frontmatter {
        # common fields
        title # optional!
        type # text, link, photo, chat, answer, quote, video, audio
        date(formatString: "YYYY-MM-DD")
        slug # just the texty bit of the slug, not the gatsby "slug"
        tumblrid
        tags
        redirect_from # map from the tumblr urls

        link_url
        link_publisher

        source {
          title
          url
        }
        via {
          name
          title
          url
        }
      }
    }
  }
`
