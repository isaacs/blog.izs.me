import React from "react"
import { StaticQuery, graphql } from "gatsby"
import url from 'url'
import './twitter-link.css'
import querystring from 'querystring'

export default ({ title, slug, text, link }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
            twitter
            url
          }
        }
      }
    `}
    render={data => (
      <span className="tweet"><a href={
          'https://twitter.com/intent/tweet?' +
          querystring.encode({
            text: (text || `${
              title ? `"${title}", ` : ''
            }by @${
              data.site.siteMetadata.twitter
            } {URL}`).replace(/\{URL\}/g, link || (
              url.resolve(data.site.siteMetadata.url, slug)
            )),
            source: data.site.siteMetadata.title,
            related: data.site.siteMetadata.title,
          })
        }>tweet about it</a>
      </span>
    )}
  />
)
