import React, { Component } from "react";
import logo from "../../logo&loading/logo.png";
import "./Navbar.scss";
import { NavLink, Link } from "react-router-dom";

// const wrapper = document.querySelector(".input-wrapper"),
//   textInput = document.querySelector("input[type='text']");

// textInput.addEventListener("keyup", event => {
//   wrapper.setAttribute("data-text", event.target.value);
// });

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light sticky-top">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="logo" style={{ width: "60px" }} />
        </Link>

        <div className="d-flex  flex-row-reverse">
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div className="burger-icon">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          <div className="input-wrapper input-vis" data-text="">
            <input type="text" placeholder="Search…" />
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto" style={{ color: "#fff" }}>
            <li className="nav-item">
              <NavLink
                exact
                activeClassName="nav-link--active"
                className="nav-link zoom-nav text-body text-uppercase "
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link--active"
                className="nav-link zoom-nav text-body text-uppercase "
                to="/about"
              >
                About us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="nav-link--active"
                className="nav-link zoom-nav text-body text-uppercase "
                to="/contacts"
              >
                Contacts
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-4 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    );
  }
}

export default Navbar;
