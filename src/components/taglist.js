import React from "react"
import { Link } from "gatsby"
import _ from 'lodash'

export default ({ tags }) => (
  <ul class="taglist">
    { tags.map(tag => (
      <li><Link to={`/tagged/${_.kebabCase(tag)}`}># {tag}</Link></li>
    )) }
  </ul>
)
