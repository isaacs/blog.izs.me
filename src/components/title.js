import React from "react"

export default ({ title, link_url, link_publisher }) => {
  if (title) return (<h1>{ link_url ? (
      <a href={link_url} class="postLink">{title + ' '}
      { link_publisher ? (<small>{link_publisher}</small>)
        : '' }</a>
    ) : title }</h1>
  )
  else return (<span />)
}
