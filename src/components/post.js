import React from 'react'
import Via from '../components/via.js'
import Title from '../components/title.js'
import Taglist from '../components/taglist.js'
import yaml from "js-yaml"

export default ({ slug, front, children }) => (
  <div class={`post ${front.type}`}>
    <Title
      title={front.title}
      slug={slug}
      link_url={front.link_url}
      link_publisher={front.link_publisher} />

    <pre style={{ margin:0, overflow:"auto", width:"100%" }}>{
      yaml.dump(front)
    }</pre>

    {children}

    <Via type="Source" {...front.source} />
    <Via type="Via" {...front.via} />
    <Taglist tags={front.tags} />
    {/* XXX: tweet this post, permalink, etc. */}
  </div>
)
