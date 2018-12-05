import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class LoginFormNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitLogin = this.submitLogin.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  componentDidUpdate() {
    if (this.props.user) {
      this.props.history.push("/");
    }
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitLogin(e) {
    e.preventDefault();

    this.props.login(this.state, this.props.history);
  }

  submitSignup(e) {
    e.preventDefault();

    this.props.signup(this.state, this.props.history);
  }
  render() {
    return (
      <div class="container-fluid login-container text-center">
        <div class="row">
          <div class="col-md-6 login-form-1">
            <h3>Login</h3>
            <form onSubmit={this.submitLogin}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  name="username"
                  required
                  onChange={this.changeHandler}
                />
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={this.changeHandler}
                />
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="Login" />
              </div>
            </form>
          </div>

          {/*-------------------------------*/}
          <div class="col-md-6 login-form-2">
            <h3>Sign Up </h3>
            <form onSubmit={this.submitSignup}>
              <div class="form-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  name="username"
                  required
                  onChange={this.changeHandler}
                />
                {this.props.errs.username && (
                  <div className="alert alert-danger">
                    {this.props.errs.username}
                  </div>
                )}
                {this.props.errs.non_field_errors && (
                  <div className="alert alert-danger">
                    {this.props.errs.non_field_errors}
                  </div>
                )}
              </div>
              <div class="form-group">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  name="password"
                  required
                  onChange={this.changeHandler}
                />
                {this.props.errs.password && (
                  <div className="alert alert-danger">
                    {this.props.errs.password}
                  </div>
                )}
                {this.props.errs.non_field_errors && (
                  <div className="alert alert-danger">
                    {this.props.errs.non_field_errors}
                  </div>
                )}
              </div>
              <div class="form-group">
                <input type="submit" class="btnSubmit" value="signup" />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history)),
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history))
});
const mapStateToProps = state => {
  return {
    user: state.auth.user,
    errs: state.errors.error
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(LoginFormNew)
);
