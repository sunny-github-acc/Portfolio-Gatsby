/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "Karolis Kaz",
    description: "I enjoy developing software using latest technologies.",
    siteUrl: "https://karoliskaz.com",
    image: "../../static/logo.png",
    email: "karolis.kazak@gmail.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/logo.png`,
      },
    },
  ],
}
module.exports = {
  pathPrefix: "/portfolio",
}
