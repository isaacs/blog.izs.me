import React from "react"
import { Link } from "gatsby"

export default ({older, newer}) => {
  if (older || newer) return (
    <div>
      { newer ? (
        <Link to={newer}>Newer</Link>
      ) : '' }
      { older ? (
        <Link to={older}>Older</Link>
      ) : '' }
    </div>
  )
  else return (<span />)
}
