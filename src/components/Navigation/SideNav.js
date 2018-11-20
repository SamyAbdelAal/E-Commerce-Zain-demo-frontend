import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
// import Modal from "react-responsive-modal";

import posed, { PoseGroup } from "react-pose";
import { close } from "../../functions";
// Fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faPlusCircle
} from "@fortawesome/free-solid-svg-icons";

// Components
import ChannelNavLink from "./ChannelNavLink";

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <div id="mySidenav" class="sidenav">
          <a href="javascript:void(0)" class="closebtn" onClick={() => close()}>
            &times;
          </a>
          <NavLink to="/welcome">Home</NavLink>
          <NavLink to="/items">Products</NavLink>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>
    );
  }
}

export default SideNav;
