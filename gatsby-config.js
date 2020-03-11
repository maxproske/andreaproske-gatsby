/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    {
      // Look for images uploaded by Netlify CMS
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: "images",
      },
    },
    {
      // Look for markdown files created by Netlify CMS
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    "gatsby-transformer-remark",
  ],
}
