import React from "react"

import offer from "../../images/offer.jpg"

import "./offers.css"

const Offers = () => (
  <div className="container flex offers">
    <img src={offer} alt="bogo" className="offer" />
    <img src={offer} alt="bogo" className="offer" />
  </div>
)

export default Offers
