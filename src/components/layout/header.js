/** @jsx jsx */
import { jsx, Flex } from "theme-ui"
import { Link } from "gatsby"

import logo from "../../images/noun_Eye.svg"
import cart from "../../images/noun_cart.svg"

const Header = () => {
  return (
    <Flex
      as="header"
      sx={{
        flexDirection: "column",
        alignItems: "center",

        "@media (min-width: 600px)": {
          flexDirection: "row",
        },
      }}
    >
      <Flex
        sx={{
          width: "100vw",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={logo} alt="eye" sx={{ maxWidth: 60 }} />
        <h1 sx={{ mx: 10, pb: 3, my: 0 }}>The Shop</h1>
      </Flex>
      <Flex
        as="nav"
        sx={{
          width: "100vw",
          justifyContent: "center",
          alignItems: "center",
          px: "2rem",
          mb: "1.5rem",
          "@media (min-width:600px)": {
            mb: 0,
          },
        }}
      >
        <Link to="" sx={{ mx: 10, fontSize: "27px" }}>
          Stores
        </Link>
        <Link to="shop" sx={{ mx: 10, fontSize: "27px" }}>
          Shop
        </Link>
        <img
          src={cart}
          alt="shoppingCart"
          sx={{ maxWidth: 40, mb: 0, ml: 10 }}
        />
      </Flex>
    </Flex>
  )
}

export default Header
