import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { open } from "../../functions";

// Actions
import * as actionCreators from "../../store/actions";
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
        {this.props.user ? (
          <button
            onClick={() => this.props.logout()}
            className="btn btn-outline-primary"
            style={{ marginLeft: "auto" }}
          >
            logout {this.props.user.username}
          </button>
        ) : (
          <Link to="/login">login</Link>
        )}
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
    errs: state.errors
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(NavBar)
);
