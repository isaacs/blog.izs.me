import React from "react"
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import background from './background.jpg'
import avatar from './avatar.jpg'

export default ({head, subhead, width, description, headerLinks}) => (<div id="head">
  <Helmet defer={false}>
    <link re="stylesheet"
      href="http://static.tumblr.com/vr9xgox/PuGmmhqcs/normalize.css" />
    <link rel="stylesheet"
      href="https://assets.tumblr.com/fonts/gibson/stylesheet.css?v=3" />
    <title>{head + (subhead ? ` - ${subhead}` : '')}</title>
    <style>{`
/*! normalize.css v1.1.0 | MIT License | git.io/normalize */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section,
summary {
    display: block;
}
audio,
canvas,
video {
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
audio:not([controls]) {
    display: none;
    height: 0;
}
[hidden] {
    display: none;
}
html {
    font-size: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
    -ms-text-size-adjust: 100%; /* 2 */
}
html,
button,
input,
select,
textarea {
    font-family: sans-serif;
}
body {
    margin: 0;
}
a:focus {
    outline: thin dotted;
}
a:active,
a:hover {
    outline: 0;
}
h1 {
    font-size: 2em;
    margin: 0.67em 0;
}
h2 {
    font-size: 1.5em;
    margin: 0.83em 0;
}
h3 {
    font-size: 1.17em;
    margin: 1em 0;
}
h4 {
    font-size: 1em;
    margin: 1.33em 0;
}
h5 {
    font-size: 0.83em;
    margin: 1.67em 0;
}
h6 {
    font-size: 0.67em;
    margin: 2.33em 0;
}
abbr[title] {
    border-bottom: 1px dotted;
}
b,
strong {
    font-weight: bold;
}
blockquote {
    margin: 1em 40px;
}
dfn {
    font-style: italic;
}
hr {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    height: 0;
}
mark {
    background: #ff0;
    color: #000;
}
p,
pre {
    margin: 1em 0;
}
code,
kbd,
pre,
samp {
    font-family: monospace, serif;
    _font-family: 'courier new', monospace;
    font-size: 1em;
}
pre {
    white-space: pre;
    white-space: pre-wrap;
    word-wrap: break-word;
}
q {
    quotes: none;
}
q:before,
q:after {
    content: '';
    content: none;
}
small {
    font-size: 80%;
}
sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}
sup {
    top: -0.5em;
}
sub {
    bottom: -0.25em;
}
dl,
menu,
ol,
ul {
    margin: 1em 0;
}
dd {
    margin: 0 0 0 40px;
}
menu,
ol,
ul {
    padding: 0 0 0 40px;
}
nav ul,
nav ol {
    list-style: none;
    list-style-image: none;
}
img {
    border: 0; /* 1 */
    -ms-interpolation-mode: bicubic; /* 2 */
}
svg:not(:root) {
    overflow: hidden;
}
figure {
    margin: 0;
}
form {
    margin: 0;
}
fieldset {
    border: 1px solid #c0c0c0;
    margin: 0 2px;
    padding: 0.35em 0.625em 0.75em;
}
legend {
    border: 0; /* 1 */
    padding: 0;
    white-space: normal; /* 2 */
    *margin-left: -7px; /* 3 */
}
button,
input,
select,
textarea {
    font-size: 100%; /* 1 */
    margin: 0; /* 2 */
    vertical-align: baseline; /* 3 */
    *vertical-align: middle; /* 3 */
}
button,
input {
    line-height: normal;
}
button,
select {
    text-transform: none;
}
button,
html input[type="button"], /* 1 */
input[type="reset"],
input[type="submit"] {
    -webkit-appearance: button; /* 2 */
    cursor: pointer; /* 3 */
    *overflow: visible;  /* 4 */
}
button[disabled],
html input[disabled] {
    cursor: default;
}
input[type="checkbox"],
input[type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
    *height: 13px; /* 3 */
    *width: 13px; /* 3 */
}
input[type="search"] {
    -webkit-appearance: textfield; /* 1 */
    -moz-box-sizing: content-box;
    -webkit-box-sizing: content-box; /* 2 */
    box-sizing: content-box;
}
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
}
button::-moz-focus-inner,
input::-moz-focus-inner {
    border: 0;
    padding: 0;
}
textarea {
    overflow: auto; /* 1 */
    vertical-align: top; /* 2 */
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/** end normalize.css **/

      body {
        background: #444;
        padding:0;
        margin:0;
      }
      blockquote {
        border-left: 3px solid #eee;
        margin-left: 0;
        padding-left: 20px;
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
        opacity:1!important;
      }
      #header a {
        color: #fb4c16;
        font-weight: normal;
        text-decoration: none;
      }
      #header h1, #header h2 {
        margin: 0;
        padding:0;
        font-weight:normal;
      }
      #header h1 a {
        font-family: 'Gibson', sans-serif;
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
        margin:0 auto 45px;
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
        max-width:95%;
        width: ${width}px;
        margin: 0 auto;
      }
      .post {
        background: #fff;
        border-radius: 4px;
        overflow: hidden;
        margin: 0 0 50px;
        padding: 1.5em;
      }
      .postbody {
        line-height:1.5;
      }

      .post img {
        max-width: 100%;
        height: auto;
      }

      .post h1 a {
        color:#000;
        text-decoration:none;
        display:block;
        padding:1em 1em 0;
        margin:-1em -1em 0;
      }
      .post.link h1 a {
        color:#fff;
        padding-bottom:1em;
        background-color:#fb4c16;
      }


      .post .media {
        margin:-1.5em -1.5em 0;
      }

      .post .caption {
        padding: 2em;
      }

      .post .meta {
        font-size:90%;
      }
      .post .meta a {
        color: #a7a7a7;
        text-decoration: none;
      }
      .post .meta a:hover, .post .meta a:hover {
        color: #333;
      }

      .post .date {
        margin: 0;
      }

      .post .meta ul {
        list-style:none;
        margin:1em 0;
        padding:0;
      }
      .post .meta li {
        display:inline-block;
        margin:0 1em 0 0;
        padding:0;
      }

      .post h1 {
        margin: 0 0 0.5em;
        font-size: 2em;
      }

      #pagnav {
        max-width:${width}px;
        overflow:auto;
        margin:0 auto 50px;
        font-family: "Helvetica Neue", HelveticaNeue, Arial, sans-serif;
      }
      #pagnav a {
        color: #FB4C16;
        display: block;

        opacity: 0.7;
        border-style:solid;
        border-radius: 4px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        text-decoration: none;
        padding: 10px 28px;
        line-height:24px;
      }
      #pagnav a.older::before {
        content:"◀ ";
      }
      #pagnav a.newer::after {
        content:" ▶";
      }


      #pagnav .newer {
        float: right;
        padding-right:18px;
      }
      #pagnav .older {
        float: left;
        padding-left:18px;
      }


    `}</style>
  </Helmet>

  <Link to={'/'} id="coverimage" />
  <Link to={'/'} id="avatar" />
  <div id="header">
    <h1><Link to={'/'}>{head}</Link></h1>
    <p style={{color: 'rgba(251, 76, 22, 0.7)' }}>{description}</p>
    {headerLinks ? (
      <ul>
        {headerLinks.map(([url,name]) => (
          <li><a href={url}>{name}</a></li>
        ))}
      </ul>
    ) : ''}
    { subhead ? (<h2>{subhead}</h2>) : '' }

  </div>

</div>)
