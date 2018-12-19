const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)
const _ = require('lodash')
const { paginate, createPagePerItem } = require(`gatsby-awesome-pagination`)
const config = require('./gatsby-config.js')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    // XXX
    // Where "slug" is either the frontmatter, or derived from
    // filename
    // if it has a tumblr postid, then make the slug be
    // /post/${id}/${slug}
    // otherwise, if it has a date, then
    // /YYYY/MM/${slug}
    const fileNode = getNode(node.parent)
    const fp = createFilePath({ node, getNode })
    const slug = node.frontmatter.slug || path.basename(fp)
    const d = node.frontmatter.date ?
      '/' + new Date(node.frontmatter.date).toISOString()
        .substring(0, 7).replace(/-/, '/') : ''
    createNodeField({
      node,
      name: `slug`,
      value: `${d}/${slug}`
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const taggedPosts = new Map()
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }
    const pageTemplate = require.resolve(`./src/templates/page.js`)
    const taggedTemplate = require.resolve(`./src/templates/tagged.js`)

    // paginated like /, /page/2, /page/3, ...
    paginate({
      createPage,
      items: result.data.allMarkdownRemark.edges,
      itemsPerPage: config.siteMetadata.postsPerPage,
      pathPrefix: ({ pageNumber }) => pageNumber ? '/page' : '/',
      component: pageTemplate,
    })

    const nodes = []
    result.data.allMarkdownRemark.edges.forEach((edge) => {
      const { node } = edge
      edge.context = { slug: node.fields.slug }
      if (node.frontmatter.tags) {
        node.frontmatter.tags.forEach(tag => {
          if (!taggedPosts.has(tag))
            taggedPosts.set(tag, [])

          taggedPosts.get(tag).push(node)
        })
      }
    })

    createPagePerItem({
      createPage,
      component: path.resolve('./src/templates/blog-post.js'),
      items: result.data.allMarkdownRemark.edges,
      itemToPath: 'node.fields.slug',
      itemToId: 'node.id',
    })

    taggedPosts.forEach((posts, tag) => {
      const kt = `/tagged/${_.kebabCase(tag)}`
      paginate({
        createPage,
        items: posts,
        itemsPerPage: config.siteMetadata.postsPerPage,
        pathPrefix: ({ pageNumber }) => pageNumber ? `${kt}/page` : kt,
        component: taggedTemplate,
        context: { tag }
      })
    })
  })
}
