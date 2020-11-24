import React from "react"
import { graphql, Link } from "gatsby"

export const query = graphql`
  {
    allShopifyProduct {
      edges {
        node {
          id
          title
          description
          images {
            localFile {
              childImageSharp {
                fluid {
                  srcSet
                }
              }
            }
          }
        }
      }
    }
  }
`

const Page2 = ({ data }) => (
  <>
    <pre>{JSON.stringify(data, null, 2)}</pre>
    <Link to="/">Home</Link>
  </>
)

export default Page2
