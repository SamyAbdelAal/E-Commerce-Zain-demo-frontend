import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
class AddressCard extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    console.log(this.props.address.id);
    this.props.setAddress(this.props.address.id);
  }
  render() {
    const address = this.props.address;
    // console.log(this.props.match);
    // const type = this.props.match.url.substring(1);
    return (
      <div className="col">
        <div className="card">
          <div className="card-body">
            <p className="card-text">{`Governorate: ${
              address.governorate
            }/ area: ${address.area}/ block: ${address.block}/ street: ${
              address.street
            }/ building_or_house: ${address.building_or_house}/ floor: ${
              address.floor
            }/ extra directions: ${address.extra_directions}`}</p>
            {this.props.type !== "profile" && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.handleAdd()}
              >
                Choose
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setAddress: addressId => dispatch(actionCreators.setAddress(addressId))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddressCard);
