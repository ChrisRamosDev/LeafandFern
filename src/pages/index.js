/** @jsx jsx */
import { jsx } from "theme-ui"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout/layout"
import Products from "../components/products/products"
import Offers from "../components/offers/offers"

const IndexPage = ({ data }) => {
  const hero = data.file.childImageSharp.fluid
  const products = data.allShopifyProduct.edges
  const tools = data.products2.edges
  return (
    <Layout>
      <h2
        sx={{
          textAlign: "center",
          bg: "black",
          color: "white",
          my: 0,
        }}
      >
        Welcome to the Shop!
      </h2>
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
    allShopifyProduct(filter: { tags: { eq: "products" } }) {
      edges {
        node {
          shopifyId
          title
          handle
          variants {
            price
          }
          images {
            localFile {
              childImageSharp {
                fluid {
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
                fluid {
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
