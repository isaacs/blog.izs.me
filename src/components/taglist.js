import React from "react"
import { Link } from "gatsby"
import _ from 'lodash'

export default ({ tags }) => {
  if (tags) return (
    <ul className="taglist">
      { tags.map((tag, id) => (
        <li key={id}><Link to={`/tagged/${_.kebabCase(tag)}`}># {tag}</Link></li>
      )) }
    </ul>
  )
  else return (<span />)
}
