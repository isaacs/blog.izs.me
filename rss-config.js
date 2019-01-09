module.exports = {
  query: `
    {
      site {
        siteMetadata {
          title
          description
          url
          siteUrl: url
        }
      }
    }
  `,
  feeds: [
    {
      serialize: ({ query: { site, allMarkdownRemark } }) =>
        allMarkdownRemark.edges.map(({ node }) =>
          Object.assign({}, node.frontmatter, {
            description: node.excerpt,
            title: node.frontmatter.title || node.excerpt,
            date: node.frontmatter.date,
            url: site.siteMetadata.siteUrl + node.fields.slug,
            guid: site.siteMetadata.siteUrl + node.fields.slug,
            custom_elements: [{ "content:encoded": node.html }],
          })
        ),
      query: `
        {
          allMarkdownRemark(
            limit: 1000,
            sort: { order: DESC, fields: [frontmatter___date] },
            filter: {frontmatter: { date: { ne: null } }}
          ) {
            edges {
              node {
                excerpt
                html
                fields { slug }
                frontmatter {
                  title
                  date
                }
              }
            }
          }
        }
      `,
      output: `/rss.xml`,
    },
  ],
}
