import React from "react"
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

export default ({headerText}) => (<div id="head">
  <Helmet>
    <title>{headerText}</title>
    <style>{`
      body {
        background: #444
      }
      #wrapper {
        width: 700px;
        margin: 0 auto
      }
      .post, #head, #pagnav {
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        margin: 0 0 50px;
      }
      #pagnav a {
        display:block;
        height:100%;
        width:49%;
        font-size:2em;
      }
      #pagnav .newer {
        float: left
      }
      #pagnav .older {
        text-align: right;
        float: right
      }
      .post .caption {
        padding: 2em;
      }
    `}</style>
  </Helmet>

  <Link to={`/`}>
    <h1>{headerText}</h1>
  </Link>
</div>)
