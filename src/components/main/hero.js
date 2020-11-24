import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "images/makeupHero.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
