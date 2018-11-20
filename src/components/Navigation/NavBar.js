import React, { Component } from "react";
import { Link } from "react-router-dom";
import { open } from "../../functions";

// Components

class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top nav"
        id="mainNav"
      >
        <Link className="navbar-brand" to="/welcome">
          <img
            src="https://www.kw.zain.com/zainkw-revamp-cms-theme/images/logo1.png"
            alt="Zain"
            data-pagespeed-url-hash="1127208787"
            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
            width="100px"
            style={{ cursor: "pointer" }}
          />
        </Link>
        <button
          className="navbar-toggler navbar-toggler-right"
          type="button"
          data-toggle="collapse"
          data-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <span onClick={() => open()} style={{ cursor: "pointer" }}>
          &#9776; open
        </span>
      </nav>
    );
  }
}

export default NavBar;
