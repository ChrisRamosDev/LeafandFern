/** @jsx jsx */
import { jsx, Grid } from "theme-ui"
import React from "react"

import offer from "../../images/offer.jpg"

const Offers = () => (
  <div sx={{ maxWidth: 1100, mx: "auto", textAlign: "center", px: 22 }}>
    <img src={offer} alt="bogo" />
    <img
      src={offer}
      alt="bogo"
      sx={{ "@media (min-width: 600px)": { ml: "2rem" } }}
    />
  </div>
)

export default Offers
