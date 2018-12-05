import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Actions
import * as actionCreators from "../store/actions";

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};

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
    if (this.props.update) {
      this.props.updateAddress(
        this.state,
        this.props.history,
        this.props.address_id
      );
    } else this.props.createAddress(this.state);
  }

  render() {
    // const type = this.props.match.url.substring(1);
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-4 addreesForm">
          <form
            className="form-horizontal"
            role="form"
            onSubmit={this.submitHandler}
          >
            <fieldset>
              <legend>Address Details</legend>

              <div className="form-group">
                <div className="form-group">
                  <label
                    className="col-sm-2
                 control-label"
                    htmlFor="textinput"
                  >
                    Governorate*
                  </label>
                  <div className="col">
                    <select
                      placeholder="Governorate "
                      className="form-control"
                      name="governorate"
                      onChange={this.changeHandler}
                    >
                      <option value="" defaultValue="selected">
                        (please select a governorate)
                      </option>
                      <option value="Al Asimah">Al Asimah</option>
                      <option value="Hawalli">Hawalli</option>
                      <option value="Mubarak Al-Kabeer">
                        Mubarak Al-Kabeer
                      </option>

                      <option value="Al-Ahmadi">Al-Ahmadi</option>
                      <option value="Farwaniya">Farwaniya</option>
                      <option value="Al-Jahra">Al-Jahra</option>
                    </select>
                  </div>
                </div>

                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Area*
                </label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Area"
                    name="area"
                    className="form-control"
                    onChange={this.changeHandler}
                    name="area"
                  />
                </div>
                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Block*
                </label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Block"
                    name="block"
                    className="form-control"
                    onChange={this.changeHandler}
                    name="block"
                  />
                </div>
                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Street*
                </label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Street"
                    name="street"
                    className="form-control"
                    onChange={this.changeHandler}
                    name="street"
                  />
                </div>
                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Building*
                </label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Building or House"
                    name="building_or_house"
                    className="form-control"
                    onChange={this.changeHandler}
                    name="building_or_house"
                  />
                </div>
                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Floor
                </label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Floor"
                    name="floor"
                    className="form-control"
                    onChange={this.changeHandler}
                    name="floor"
                  />
                </div>
                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Extra directions
                </label>
                <div className="col">
                  <input
                    type="text"
                    placeholder="Extra directions"
                    name="extra_directions"
                    className="form-control"
                    onChange={this.changeHandler}
                    name="extra_directions"
                  />
                </div>
              </div>

              {/* <div className="form-group">
                <label className="col-sm-2 control-label" htmlFor="textinput">
                  Country
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    placeholder="Country"
                    className="form-control"
                  />
                </div>
              </div> */}

              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <div className="pull-right">
                    <button type="submit" className="btn btn-primary">
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
  createAddress: addressDetail =>
    dispatch(actionCreators.createAddress(addressDetail)),
  updateAddress: (addressInfo, history, address_id) =>
    dispatch(actionCreators.updateAddress(addressInfo, history, address_id))
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
