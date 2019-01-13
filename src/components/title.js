import React from "react"
import { Link } from "gatsby"

export default ({ slug, title, link_url, link_publisher }) => {
  if (title) return (<h1>{ link_url ? (
      <a href={link_url} className="postLink">{title + ' '}
      { link_publisher ? (<small>{link_publisher}</small>)
        : '' }</a>
    ) : (
      <Link to={slug}>{title}</Link>
    ) }</h1>
  )
  else return (<span />)
}
