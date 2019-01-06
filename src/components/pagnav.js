import React from "react"
import { Link } from "gatsby"
import './pagnav.css'

export default ({older, newer}) => {
  if (older || newer) return (
    <div id="pagnav">
      { older ? (
        <Link className="older" to={older}>Older</Link>
      ) : '' }
      { newer ? (
        <Link className="newer" to={newer}>Newer</Link>
      ) : '' }
    </div>
  )
  else return (<span />)
}
