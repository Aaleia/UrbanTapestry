import React, { Component } from "react";
import "./../components/Navbar.css";
import logo from '../assets/icon.png'

class Navbar extends Component {
  render() {
    return (
      <header id="header">
         <a href="/">
          <img src={logo} alt="Logo" />
        </a>
        <h1>
          <a href="/">UrbanTapestry</a>
        </h1>
        <nav id="nav">
          <ul>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/map">Map</a>
            </li>
            <li>
              <a href="/" className="button">
                Sign In
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
