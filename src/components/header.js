import React from "react"
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import background from './background.jpg'
import avatar from './avatar.jpg'

export default ({headerText, width, description, headerLinks}) => (<div id="head">
  <Helmet>
    <link rel="stylesheet"
      href="https://assets.tumblr.com/fonts/gibson/stylesheet.css?v=3" />
    <title>{headerText}</title>
    <style>{`
      body {
        background: #444;
        padding:0;
        margin:0;
      }
      a#coverimage {
        background: url(${background}) center center;
        background-size: cover;
        width: 100%;
        /* responsiveify this */
        /* height should be no more than about half of width */
        height: 350px;
        max-height: 22em;
        display:block;
      }
      a#avatar {
        background: url(${avatar}) #444;
        height:106px;
        width:106px;
        display:block;
        background-size:106px 106px;
        box-shadow: 0 0 0 4px #444444;
        border-radius: 4px;
        margin:-78px auto 0;
      }
      #header {
        font-family: "Helvetica Neue", HelveticaNeue, Arial, sans-serif;
        color: #fb4c16;
        width: 100%;
        max-width: ${width}px;
        margin: auto;
        text-align:center;
      }
      a:hover, a:active {
        text-decoration:underline!important;
      }
      #header h1 a {
        font-family: 'Gibson', sans-serif;
      }
      #header a {
        color: #fb4c16;
        font-weight: normal;
        text-decoration: none;
      }
      #header h1 {
        margin: 0;
        padding:0;
        font-weight:normal;
      }
      #header h1 a {
        display: block;
        font-size: 56px;
        line-height: 1.2;
        padding-top:13px;
      }
      #header p {
        margin:0;
        padding-top:8px;
        line-height:1;
      }
      #header ul {
        list-style:none;
        margin:0;
        padding:0;
      }
      #header li {
        display:inline-block;
        margin:0;
        padding:0;
      }
      #header li a {
        padding:5px 0.5em;
        display:block;
      }

      #content {
        width:100%;
        max-width: ${width}px;
        margin: 0 auto
      }
      .post, #pagnav {
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

  <Link to={'/'} id="coverimage" />
  <Link to={'/'} id="avatar" />
  <div id="header">
    <h1><Link to={'/'}>{headerText}</Link></h1>
    <p style={{color: 'rgba(251, 76, 22, 0.7)' }}>{description}</p>
    {headerLinks ? (
      <ul>
        {headerLinks.map(([url,name]) => (
          <li><a href={url}>{name}</a></li>
        ))}
      </ul>
    ) : ''}

  </div>

</div>)
