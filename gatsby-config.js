require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Shopify beauty store`,
    description: `Gatsby / Shopify store for skin care products.`,
    author: `@crash7114`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "leaf-and-fern",
        accessToken: process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN,
        apiVersion: "2020-10",
        paginationSize: 20,
        includeCollections: ["shop", "collections"],
      },
    },
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {},
  ],
}
