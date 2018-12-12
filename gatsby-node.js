const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require(`path`)

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
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: require.resolve(`./src/templates/blog-post.js`),
          context: {
            // Data passed to context is available
            // in page queries as GraphQL variables.
            slug: node.fields.slug,
          },
        })
      })
      resolve()
    })
  })
}


