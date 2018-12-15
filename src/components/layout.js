import React from "react"
import { StaticQuery, Link, graphql } from "gatsby"
import Helmet from 'react-helmet';


export default ({ children }) => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
    }
    render={data => (
    <div>
      <Helmet>
        <style>{`
          body {
            background: #444
          }
          #content {
            width: 700px;
            margin: 0 auto
          }
          .post {
            background: #fff;
            border-radius: 4px;
            overflow: hidden;
          }
          .post .caption {
            padding: 2em;
          }
        `}</style>
      </Helmet>
      {// XXX header goes here
      }
      <div id="content">
        <Link to={`/`}>
          <h3>
            {data.site.siteMetadata.title}
          </h3>
        </Link>
        {children}
      </div>
    </div>
    )}
  />
)
