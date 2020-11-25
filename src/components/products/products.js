/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"

const products = props => {
  return (
    <>
      <h2 sx={{ textAlign: "center", mt: 20 }}>{props.heading}</h2>
      <Grid
        gap={16}
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
            <div
              id={product.node.shopifyId}
              sx={{
                fontSize: "clamp(0.75rem, 2.5vw, 1rem)",
              }}
            >
              <Link to={`/product/${product.node.handle}`}>
                <Img
                  fluid={product.node.images[0].localFile.childImageSharp.fluid}
                />
                {product.node.title}
              </Link>
              <p>${product.node.variants[0].price}</p>
            </div>
          )
        })}
      </Grid>
    </>
  )
}

export default products
