/** @jsx jsx */
import { jsx, Grid, Flex } from "theme-ui"
import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"

const products = props => {
  return (
    <>
      <h2 sx={{ textAlign: "center", mt: 20 }}>{props.heading}</h2>
      <Grid
        gap={20}
        columns={"repeat(auto-fill, minmax(50px, 200px))"}
        sx={{
          justifyContent: "center",
          padding: "1rem",
          maxWidth: 1500,
          mx: "auto",
        }}
      >
        {props.products.map(product => {
          return (
            <Flex
              id={product.node.shopifyId}
              sx={{
                fontSize: "clamp(0.75rem, 2.5vw, 1rem)",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Link to={`/product/${product.node.handle}`}>
                <Img
                  fluid={product.node.images[0].localFile.childImageSharp.fluid}
                />
                <h4>{product.node.title}</h4>
              </Link>
              <Flex sx={{ justifyContent: "space-between", pr: 2 }}>
                <span>${product.node.variants[0].price}</span>
                <button
                  sx={{
                    cursor: "pointer",
                    fontSize: 16,
                    py: "4px",
                    lineHeight: "16px",
                    bg: "black",
                    color: "white",
                    border: "none",
                    borderRadius: "3px",
                  }}
                >
                  Add to Cart
                </button>
              </Flex>
            </Flex>
          )
        })}
      </Grid>
    </>
  )
}

export default products
