import React from "react"

import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default ({ data, pageContext }) => (
  <Layout>
    <div>
      <h1>
        blog.izs.me
      </h1>
      <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link
            to={node.fields.slug}
            css={css`
              text-decoration: none;
              color: inherit;
            `}
          >
            <h3>
              {node.frontmatter.title}{" "}
              <span css={css`
                color: #bbb;
              `} > — {node.frontmatter.date}
              </span>
            </h3>
            <p>{node.excerpt}</p>
          </Link>
        </div>
      ))}
    </div>
    <div>
      { pageContext.previousPagePath ? (
        <Link to={pageContext.previousPagePath}>Previous</Link>
      ) : '' }
      { pageContext.nextPagePath ? (
        <Link to={pageContext.nextPagePath}>Next</Link>
      ) : '' }
    </div>
  </Layout>
)

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      skip: $skip,
      limit: $limit
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
