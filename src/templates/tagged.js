import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from '../components/post.js'

export default ({ data, pageContext }) => (
  <Layout
      headerText={pageContext.tag}
      newer={pageContext.previousPagePath}
      older={pageContext.nextPagePath} >
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <Post front={node.frontmatter} slug={node.fields.slug}
        html={node.html} />
    ))}
  </Layout>
)


export const query = graphql`
  query($tag: String!, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } },
      sort: { fields: [frontmatter___date], order: DESC },
      skip: $skip,
      limit: $limit
    ) {
      totalCount
      edges {
        node {
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
    }
  }
`
