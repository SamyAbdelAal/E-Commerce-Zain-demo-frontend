import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./homepage";
import "../homepageHeader.css";
class Welcome extends Component {
  render() {
    return (
      <div>
        <div className=" d-flex welcome">
          <div
            className="d-flex  w-100"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="container text-center my-auto z-1">
              {!this.props.user ? (
                <div>
                  <h1 id="title-lens" className="mb-1 h1">
                    HELLO STRANGER
                  </h1>
                  <h2 id="subtitle" className="mb-5 h2">
                    <em>You're gonna need to login to see the messages</em>
                  </h2>
                  <Link to="/login" className="btn btn-primary btn-lg">
                    Login
                  </Link>
                </div>
              ) : (
                <div>
                  <h1 id="title-lens" className="mb-1 h1 ">
                    HELLO {this.props.user.username}
                  </h1>
                  <Link to="/items" className="btn btn-primary btn-lg">
                    Products
                  </Link>
                </div>
              )}
            </div>
            {/*<div class="row">
              <div class="banner-text">
                <h1 id="title-lens">Welcome</h1>
                <h1 id="title-lens">To The</h1>
                <h1 id="title-lens">New</h1>
                <h2 id="subtitle">Animation Css world</h2>
              </div>
            </div>*/}
          </div>
        </div>
        <Homepage />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Welcome);
