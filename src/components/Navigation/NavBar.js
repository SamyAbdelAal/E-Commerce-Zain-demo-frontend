import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { open } from "../../functions";

// Actions
import * as actionCreators from "../../store/actions";
// Components

class NavBar extends Component {
  render() {
    const quantityCounter = list => {
      let quantity = 0;
      list.forEach(item => (quantity += item.quantity));
      return quantity;
    };
    return (
      <nav className="navbar navbar-expand-lg  fixed-top nav" id="mainNav">
        <Link className="navbar-brand" to="/welcome">
          <img
            src="https://www.kw.zain.com/o/zainkw-revamp-cms-theme/images/logo1.png"
            alt="Zain"
            data-pagespeed-url-hash="1127208787"
            width="100px"
            style={{ cursor: "pointer" }}
          />
        </Link>

        <button
          className="btn btn-outline-success"
          onClick={() => open()}
          style={{ cursor: "pointer" }}
        >
          ☰
        </button>
        <div style={{ marginLeft: "auto" }}>
          {this.props.user ? (
            <button
              onClick={() => this.props.logout()}
              className="btn btn-outline-primary"
              style={{ marginLeft: "auto" }}
            >
              logout {this.props.user.username}
            </button>
          ) : (
            <Link className="btn btn-outline-success" to="/login">
              login
            </Link>
          )}
          <Link className="btn btn-outline-primary" to="/cart">
            Cart{quantityCounter(this.props.cart)}
          </Link>
        </div>
      </nav>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history)),
  logout: () => dispatch(actionCreators.logout())
});
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    errs: state.errors,
    cart: state.cart.cart
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
