import React from "react"
import { Link } from "gatsby"

export default ({older, newer}) => {
  if (older || newer) return (
    <div id="pagnav">
      { newer ? (
        <Link class="newer" to={newer}>Newer</Link>
      ) : '' }
      { older ? (
        <Link class="older" to={older}>Older</Link>
      ) : '' }
    </div>
  )
  else return (<span />)
}
