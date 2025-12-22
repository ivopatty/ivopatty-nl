require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Ivo Jesse Patty`,
    description: `I am an Innovation Consultant, Data Scientist and Back-End Developer.`,
    author: `@ivopatty`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Roboto']
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        include: /skills/
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `maqkodof3hyi`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: process.env.ACCESS_TOKEN,
        host: process.env.CONTENTFUL_HOST || `preview.contentful.com`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
