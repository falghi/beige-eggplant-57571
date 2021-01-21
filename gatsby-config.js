const siteMetadata = require('./site-metadata.json')

module.exports = {
    pathPrefix: '/',
    siteMetadata: siteMetadata,
    plugins: [
        `gatsby-plugin-react-helmet`,
        `gatsby-source-data`,
        `gatsby-transformer-remark`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: `${__dirname}/src/pages`
            }
        },
        {
            resolve: `gatsby-plugin-sass`,
            options: {}
        },
        {
            resolve: `gatsby-remark-page-creator`,
            options: {}
        },
        {
            resolve: `@stackbit/gatsby-plugin-menus`,
            options: {
                sourceUrlPath: `fields.url`,
                pageContextProperty: `menus`,
            }
        },
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
            name: `PT. Anugerah Bumi Samudra`,
            short_name: `PT. ABS`,
            start_url: `/`,
            background_color: `#ffffff`,
            theme_color: `#29cf7f`,
            display: `minimal-ui`,
            icon: `images/classic/logo.jpeg`, // This path is relative to the root of the site.
          },
        }
    ]
};
