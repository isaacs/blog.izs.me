import React from 'react'
import { Link } from 'gatsby'
import Via from '../components/via.js'
import Title from '../components/title.js'
import Taglist from '../components/taglist.js'
// import yaml from "js-yaml"

export default ({ slug, front, html }) => (
  <div class={`post ${front.type}`}>
    <Title
      title={front.title}
      slug={slug}
      link_url={front.link_url}
      link_publisher={front.link_publisher} />

    {/*
    <pre style={{ margin:0, overflow:"auto", width:"100%" }}>{
      yaml.dump(front)
    }</pre>
    */}

    <div class="postbody"
      dangerouslySetInnerHTML={{ __html: html }} />

    <div class="meta">
      <Via type="Via" {...front.via} />
      <Via type="Source" {...front.source} />
      <Taglist tags={front.tags} />
      <p class="date"><Link to={slug}>
        {new Date(front.date).toISOString().slice(0,10)}
      </Link></p>
    </div>
    {/* XXX: tweet this post, permalink, etc. */}
  </div>
)
