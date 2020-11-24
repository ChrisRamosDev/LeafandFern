import React from "react"
import Img from "gatsby-image"

import "./products.css"

const products = props => {
  return (
    <div className="container grid">
      {props.products.map(product => {
        return (
          <div id={product.node.shopifyId} className="productCard">
            <Img
              fluid={product.node.images[0].localFile.childImageSharp.fluid}
            />
            <p>{product.node.title}</p>
            {/* <p>{product.node.description}</p> */}
            <p>${product.node.variants[0].price}</p>
          </div>
        )
      })}
    </div>
  )
}

export default products
