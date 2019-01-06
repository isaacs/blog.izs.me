import React from "react"
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import './header.css'

export default ({head, subhead, description, headerLinks}) => (<div id="head">
  <Helmet>
    <title>{head + (subhead ? ` - ${subhead}` : '')}</title>
  </Helmet>

  <Link to={'/'} id="coverimage" />
  <Link to={'/'} id="avatar" />
  <div id="header">
    <h1><Link to={'/'}>{head}</Link></h1>
    <p className="description">{description}</p>
    {headerLinks ? (
      <ul>
        {headerLinks.map(([url,name]) => (
          <li>{
            (/^https?:\/\//).test(url) ? (
              <a href={url}>{name}</a>
            ) : (<Link to={url}>{name}</Link>)
          }</li>
        ))}
      </ul>
    ) : ''}
    { subhead ? (<h2>{subhead}</h2>) : '' }

  </div>

</div>)
