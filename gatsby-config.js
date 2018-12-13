module.exports = {
  siteMetadata: {
    title: `blog.izs.me`,
    description: `Writing and Stuff from Isaac Z. Schlueter`,
    name: `izs`,
    title: `blog.izs.me`,
    url: `http://blog.izs.me/`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-images`
        ],
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-redirect-from`,
    `gatsby-plugin-meta-redirect` // make sure this is always the last one
  ]
}
