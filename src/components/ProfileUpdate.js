import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class ProfileUpdate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dob: "",
      firstname: "",
      lastname: "",
      email: "",
      profile_pic: "",
      number: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push("/");
    }
    this.setState({
      dob: this.props.profile.dob,
      firstname: this.props.profile.firstname,
      lastname: this.props.profile.lastname,
      email: this.props.profile.email,
      profile_pic: this.props.profile.profile_pic,
      number: this.props.profile.number
    });
  }

  componentDidUpdate() {
    if (!this.props.user) {
      this.props.history.push("/");
    }
  }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.update(this.state, this.props.user.user_id, this.props.history);
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
                defaultValue={this.props.profile.firstname}
                name="firstname"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="text"
                defaultValue={this.props.profile.lastname}
                placeholder="Last Name"
                name="lastname"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="email"
                defaultValue={this.props.profile.email}
                placeholder="Email"
                name="email"
                required
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="date"
                defaultValue={this.props.profile.dob}
                placeholder="Birthdate"
                name="dob"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="number"
                defaultValue={this.props.profile.number}
                placeholder="Phone Number"
                name="number"
                onChange={this.changeHandler}
              />
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="file"
                defaultValue={this.props.profile.profile_pic}
                placeholder="Change Pic"
                name="profile_pic"
                onChange={this.changeHandler}
              />
            </div>
            <input className="btn btn-primary" type="submit" value="Update" />
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  update: (profileInfo, userID, history) =>
    dispatch(actionCreators.updateUserProfile(profileInfo, userID, history))
});
const mapStateToProps = state => {
  return {
    profile: state.profile.profile,
    user: state.auth.user
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(ProfileUpdate)
);
