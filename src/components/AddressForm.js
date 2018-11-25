import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };

    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.user) {
  //     this.props.history.push("/");
  //   }
  // }
  //
  // componentDidUpdate() {
  //   if (this.props.user) {
  //     this.props.history.push("/");
  //   }
  // }

  changeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  submitHandler(e) {
    e.preventDefault();

    this.props.login(this.state, this.props.history);
  }

  render() {
    const type = this.props.match.url.substring(1);
    return (
      <div class="row">
        <div class="col-md-4 col-md-offset-4">
          <form class="form-horizontal" role="form">
            <fieldset>
              <legend>Address Details</legend>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="textinput">
                  Area
                </label>
                <div class="col-sm-4">
                  <input type="text" placeholder="Area" class="form-control" />
                </div>
                <label class="col-sm-2 control-label" for="textinput">
                  Block
                </label>
                <div class="col-sm-4">
                  <input type="text" placeholder="Block" class="form-control" />
                </div>
                <label class="col-sm-2 control-label" for="textinput">
                  Street
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    placeholder="Street"
                    class="form-control"
                  />
                </div>
                <label class="col-sm-2 control-label" for="textinput">
                  Building
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    placeholder="Building or House"
                    class="form-control"
                  />
                </div>
                <label class="col-sm-2 control-label" for="textinput">
                  Floor
                </label>
                <div class="col-sm-4">
                  <input type="text" placeholder="Floor" class="form-control" />
                </div>
                <label class="col-sm-2 control-label" for="textinput">
                  Extra directions
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    placeholder="Extra directions"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="textinput">
                  Governorate
                </label>
                <div class="col-sm-4">
                  <select placeholder="Governorate " class="form-control">
                    <option value="" selected="selected">
                      (please select a country)
                    </option>
                    <option value="">Al Asimah</option>
                    <option value="">Hawalli</option>
                    <option value="">Mubarak Al-Kabeer</option>
                    <option value="">Al-Ahmadi</option>
                    <option value="">Farwaniya</option>
                    <option value="">Al-Jahra</option>
                  </select>
                </div>

                <label class="col-sm-2 control-label" for="textinput">
                  Postcode
                </label>
                <div class="col-sm-4">
                  <input
                    type="text"
                    placeholder="Post Code"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="form-group">
                <label class="col-sm-2 control-label" for="textinput">
                  Country
                </label>
                <div class="col-sm-10">
                  <input
                    type="text"
                    placeholder="Country"
                    class="form-control"
                  />
                </div>
              </div>

              <div class="form-group">
                <div class="col-sm-offset-2 col-sm-10">
                  <div class="pull-right">
                    <button type="submit" class="btn btn-default">
                      Cancel
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history))
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
  )(AddressForm)
);
