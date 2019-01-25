import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import PagNav from '../components/pagnav.js'
import Post from '../components/post.js'
import Helmet from 'react-helmet'

export default ({ data, pageContext }) => {
  const post = data.markdownRemark
  const front = post.frontmatter
  return (
    <Layout>
      <Helmet>
        <meta name="description" content={post.excerpt} />
        <meta name="DC.date.issued" content={new Date(front.date).toISOString().slice(0, 10)} />
        <meta name="twitter:card" content="summary" />
        {/*
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        site metadata, belongs in layout?
        <meta name="twitter:site" content="@businesswire" />
        <meta property="og:site_name" content={site name} />

        image should be avatar, unless it's a photoset post, then the first photo
        <meta name="twitter:image" content="https://mms.businesswire.com/media/20190108005325/en/576705/21/npm_logo.jpg" />
        <meta property="og:image" content="https://mms.businesswire.com/media/20190108005325/en/576705/21/npm_logo.jpg" />

        */}
        <meta name="twitter:title" content={front.title} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="twitter:widgets:csp" content="on" />

        <meta property="og:title" content={front.title} />
        <meta property="og:description" content={front.excerpt} />
        <meta property="og:type" content="article" />
      </Helmet>
      <Post slug={post.fields.slug} front={front}
        html={post.html} />

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
      excerpt
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
