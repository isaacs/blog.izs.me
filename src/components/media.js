import React from "react"

export default props => ( // todo: get more fancy here maybe?
  <div dangerouslySetInnerHTML={{ __html: props.embed }} />
)
