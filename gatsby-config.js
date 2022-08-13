require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Micro Contentful Blogsite`,
    description: `Description goes here`,
    author: `@force`,
  },
  plugins: [
    'gatsby-plugin-top-layout',
    'gatsby-plugin-mui-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true
      },
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
