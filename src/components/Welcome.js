import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "./homepage";
import "../homepageHeader.css";
class Welcome extends Component {
  render() {
    return (
      <div>
        <div className=" d-flex welcome" style={{ overflow: "hidden" }}>
          <div
            className="d-flex  w-100"
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          >
            <div className="container text-center my-auto z-1">
              {!this.props.user ? (
                <div>
                  <h1 id="title-lens" className="mb-1 h1">
                    WELCOME TO OUR SHOP
                  </h1>
                  <h2 id="subtitle" className="mb-5 h2">
                    <em>
                      You're gonna find our products to be of excellent quality!
                    </em>
                  </h2>
                  <Link to="/login" style={{}}>
                    <a
                      className="buttonHome"
                      href="#"
                      style={{
                        zIndex: "1000"
                      }}
                    >
                      <span data-text="L">L</span>
                      <span data-text="O">O</span>
                      <span data-text="G">G</span>
                      <span data-text="I">I</span>
                      <span data-text="N">N</span>
                    </a>
                  </Link>
                  <Link to="/signup">
                    <a
                      className="buttonHome"
                      href="#"
                      style={{
                        zIndex: "1000",
                        marginTop: "70px"
                      }}
                    >
                      <span data-text="S">S</span>
                      <span data-text="I">I</span>
                      <span data-text="G">G</span>
                      <span data-text="N">N</span>
                      <span data-text="U">U</span>
                      <span data-text="P">P</span>
                    </a>
                  </Link>
                </div>
              ) : (
                <div className="container-fluid">
                  <h1 id="title-lens" className="mb-1 h1 ">
                    HELLO {this.props.user.username}
                  </h1>
                  <Link to="/items">
                    <a
                      className="buttonHome"
                      href="#"
                      style={{ zIndex: "1000", marginTop: "45px" }}
                    >
                      <span data-text="P">P</span>
                      <span data-text="R">R</span>
                      <span data-text="O">O</span>
                      <span data-text="D">D</span>
                      <span data-text="U">U</span>
                      <span data-text="C">C</span>
                      <span data-text="T">T</span>
                      <span data-text="S">S</span>
                    </a>
                  </Link>
                </div>
              )}
              <div className="container-fluid d-flex graphics-elements bounceInDown animated">
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img1.png"
                  alt=""
                  class="object-1 scaleupdown animation-speed-8s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img2.png"
                  alt=""
                  class="object-2 rotating animation-speed-30s"
                />
                <img
                  className="spin"
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img3.png"
                  alt=""
                  class="object-3"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img4.png"
                  alt=""
                  class="object-4"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img5.png"
                  alt=""
                  class="object-5 rotating animation-speed-30s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img6.png"
                  alt=""
                  class="object-6 rotating animation-speed-30s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img7.png"
                  alt=""
                  class="object-7"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img8.png"
                  alt=""
                  class="object-8 rotating animation-speed-30s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img9.png"
                  alt=""
                  class="object-9"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img10.png"
                  alt=""
                  class="object-10 rotating animation-speed-30s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img11.png"
                  alt=""
                  class="object-11 rotating animation-speed-30s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img12.png"
                  alt=""
                  class="object-12"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img13.png"
                  alt=""
                  class="object-13 scaleupdown animation-speed-8s"
                />
                <img
                  src="https://d364xagvl9owmk.cloudfront.net/static/images/landing-elements/element-img14.png"
                  alt=""
                  class="object-14"
                />
              </div>
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
