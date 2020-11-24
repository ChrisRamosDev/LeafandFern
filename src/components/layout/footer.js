import React from "react"

import logo from "../../images/noun_Eye.svg"

export const Subscribe = () => {
  return (
    <div className="subscribe flex">
      <h3>Beauty Slogan?</h3>
      <form action="">
        <label htmlFor="email">
          <p>Sign up for Shop emails</p>
          <input type="email" />
          <button type="button" id="emailButton">
            Sign Up
          </button>
        </label>
      </form>
    </div>
  )
}

const Footer = () => (
  <footer>
    <div className="container footerHeader flex">
      <div className="flex">
        <img src={logo} alt="eye" className="eye header-icon" />
        <h2>The Shop</h2>
      </div>
    </div>
    <div className="container menuGroup flex">
      <div className="menus flex">
        <ul className="footerMenu">
          <li>
            <h4>About Shop</h4>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
        </ul>
        <ul className="footerMenu">
          <li>
            <h4>About Shop</h4>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
        </ul>
        <ul className="footerMenu">
          <li>
            <h4>About Shop</h4>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
          <li>
            <a href="http://localhost:8000">Link</a>
          </li>
        </ul>
      </div>
      <Subscribe />
    </div>
  </footer>
)

export default Footer
