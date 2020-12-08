/** @jsx jsx */
import { jsx, Flex, Label, Input, Box } from "theme-ui"

import logo from "../../images/noun_Eye.svg"

export const Subscribe = () => {
  return (
    <Flex
      sx={{
        flexDirection: "column",
        px: "4rem",
        width: "100vw",
        "@media (min-width: 740px)": {
          maxWidth: 500,
        },
      }}
    >
      <h3 sx={{ my: 20 }}>Beauty Slogan?</h3>
      <Box as="form" sx={{ mb: "1.5rem", "& > * + *": { mt: 21 } }}>
        <Label htmlFor="email">Sign up for Shop emails</Label>
        <Input type="email" sx={{ maxWidth: 350 }} />
        <button type="button" sx={{ cursor: "pointer" }}>
          Sign Up
        </button>
      </Box>
    </Flex>
  )
}

const Footer = () => (
  <footer sx={{ maxWidth: 1500, mx: "auto", my: "1rem" }}>
    <Flex
      sx={{
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={logo} alt="eye" sx={{ maxWidth: 60 }} />
      <h2 sx={{ mx: 10, pb: 3, my: 0 }}>The Shop</h2>
    </Flex>
    <Flex
      sx={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "@media (min-width: 740px)": {
          flexDirection: "row",
          justifyContent: "space-between",
        },
      }}
    >
      <Flex
        sx={{
          ul: {
            listStyle: "none",
          },
          "@media (min-width: 740px)": {
            pl: "2rem",
          },
        }}
      >
        <ul>
          <li>
            <h4 sx={{ my: 0 }}>About Shop</h4>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <h4 sx={{ my: 0 }}>About Shop</h4>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <h4 sx={{ my: 0 }}>About Shop</h4>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
          <li>
            <a href="/" sx={{ cursor: "pointer" }}>
              Link
            </a>
          </li>
        </ul>
      </Flex>
      <Subscribe />
    </Flex>
  </footer>
)

export default Footer
