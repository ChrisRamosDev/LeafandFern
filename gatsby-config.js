require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Shopify beauty store`,
    description: `Gatsby / Shopify store for skin care products.`,
    author: `@crash7114`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Leaf and Fern",
        short_name: "leafandfern",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        icon: "src/images/myLogoish.png",
      },
    },
    "gatsby-transformer-sharp",
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
  ],
}
