import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Products from "../components/products/products"
import Offers from "../components/offers/offers"

import "./reset.css"
import "./index.css"

const IndexPage = ({ data }) => {
  const hero = data.file.childImageSharp.fluid
  const products = data.allShopifyProduct.edges
  const tools = data.products2.edges
  return (
    <Layout>
      <h3 className="bannerH3">Welcome to the Shop!</h3>
      <Img fluid={hero} className="hero" />
      <Products products={products} heading="Our Products" />
      <Offers />
      <Products products={tools} heading="Beauty tools" />
    </Layout>
  )
}

export const pageQuery = graphql`
  query data {
    file(relativePath: { eq: "makeupHero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1500, maxHeight: 500, fit: COVER, cropFocus: CENTER) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allShopifyProduct {
      edges {
        node {
          shopifyId
          title
          variants {
            price
          }
          images {
            localFile {
              childImageSharp {
                fluid(fit: COVER, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    products2: allShopifyProduct(filter: { tags: { eq: "extra" } }) {
      edges {
        node {
          shopifyId
          title
          variants {
            price
          }
          images {
            localFile {
              childImageSharp {
                fluid(fit: COVER, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
