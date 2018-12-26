import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Post from '../components/post.js'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  return (
    <Layout>
      <Post slug={post.fields.slug} front={front}
        html={post.html} />
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
        slug # just the texty bit of the slug, not the gatsby "slug"
      }
    }
  }
`
