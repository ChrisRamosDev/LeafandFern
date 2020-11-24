import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import "./reset.css"
import "./index.css"

const IndexPage = () => (
  <Layout>
    <h1>Welcome to the Shop</h1>
    <Link to="/page2">Page2</Link>
  </Layout>
)

export default IndexPage
