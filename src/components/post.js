import React from 'react'
import { Link } from 'gatsby'
import Via from './via.js'
import Title from './title.js'
import Taglist from './taglist.js'
// import yaml from "js-yaml"
import './post.css'
import Twitter from './twitter-link.js'

export default ({ slug, front, html }) => (
  <div className={`post ${front.type}`} id={front.slug}>
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

    <div className="postbody"
      dangerouslySetInnerHTML={{ __html: html }} />

    <div className="meta">
      <Via type="Via" {...front.via} />
      <Via type="Source" {...front.source} />
      <Taglist tags={front.tags} />
      <p className="date">
        {front.date ? (
        <Link to={slug}>
          <span>{new Date(front.date).toISOString().slice(0,10)}</span>
        </Link>
        ) : ''}
        <Twitter title={front.title} slug={slug} />
      </p>
    </div>
  </div>
)
