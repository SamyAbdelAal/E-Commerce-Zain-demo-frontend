import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      first_name: "",
      last_name: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
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

  submitHandler(e) {
    e.preventDefault();

    this.props.signup(this.state, this.props.history);
  }

  render() {
    const type = this.props.match.url.substring(1);
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4">Register an account</h5>
          <form onSubmit={this.submitHandler} noValidate>
            {/* {authStore.errors.length > 0 && (
            <div className="alert alert-danger" role="alert">
              {authStore.errors}
            </div>
          )} */}
            <div className="form-group">
              <input
                className="form-control"
                type="text"
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
            <div className="form-group">
              <input
                className="form-control"
                type="password"
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
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                placeholder="Email"
                name="email"
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
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="First Name"
                name="first_name"
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
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                placeholder="Last Name"
                name="last_name"
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
            <input
              className="btn btn-primary"
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>
        <div className="card-footer">
          <Link
            to={type === "login" ? "/signup" : "/login"}
            className="btn btn-small btn-link"
            // onClick={() => (authStore.errors = [])}
          >
            {type === "login"
              ? "register an account"
              : "login with an existing account"}
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signup: (userData, history) =>
    dispatch(actionCreators.signup(userData, history))
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
  )(SignupForm)
);
