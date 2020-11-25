/** @jsx jsx */
import { jsx, Flex } from "theme-ui"

import Header from "./header"
import Footer from "./footer"

import "normalize.css"

const Layout = ({ children }) => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header sx={{ width: "100%" }} />
      <main sx={{ width: "100%", flex: "1 1 auto" }}>{children}</main>
      <Footer
        sx={{
          width: "100%",
        }}
      />
    </Flex>
  )
}

export default Layout
