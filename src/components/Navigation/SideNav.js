import React from "react";
import { NavLink } from "react-router-dom";
// import Modal from "react-responsive-modal";

import { close } from "../../functions";
// Fontawesome

// Components

class SideNav extends React.Component {
  render() {
    return (
      <div>
        <div id="mySidenav" className="sidenav">
          <button className="closebtn" onClick={() => close()}>
            &times;
          </button>
          <NavLink to="/welcome">Home</NavLink>
          <NavLink to="/items">Products</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          {/* <NavLink to="/previousOrders">Previous Orders</NavLink> */}
          {/*<a href="#">Clients</a>
           <a href="#">Contact</a>*/}
        </div>
      </div>
    );
  }
}

export default SideNav;
