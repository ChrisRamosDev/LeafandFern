import React from "react"
import { Link } from "gatsby"

import logo from "../images/noun_Eye.svg"
import heart from "../images/noun_Heart.svg"
import shop from "../images/noun_Shop.svg"

const Header = () => {
  return (
    <header className="container flex">
      <div className="flex">
        <img src={logo} alt="eye" className="eye header-icon" />
        <h1>The Shop</h1>
      </div>
      <nav className="navbar flex">
        <Link to="" className="flex">
          <img src={heart} alt="heart icon" className="header-icon" />
          Stores
        </Link>
        <Link to="shop" className="flex">
          <img src={shop} alt="little shop" className="header-icon" />
          Shop
        </Link>
        <Link to="contact">Contact</Link>
      </nav>
    </header>
  )
}

export default Header
