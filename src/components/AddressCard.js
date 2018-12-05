import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddressForm from "./AddressForm";
import * as actionCreators from "../store/actions";

class AddressCard extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    this.props.setAddress(this.props.address.id);
  }
  // handleUpdate() {
  //     this.props.updateAddress(this.props.address.id,his);
  //   }
  render() {
    const address = this.props.address;
    const address_id = address.id;

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

            {this.props.type === "cart" && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => this.handleAdd()}
              >
                Choose
              </button>
            )}
            <div className="col-xs-3">
              <button
                type="button"
                className="btn btn-primary"
                data-toggle="modal"
                data-target={`#addressFormUpdate${address.id}`}
              >
                Update Address
              </button>
              <div
                className="modal fade"
                id={`addressFormUpdate${address.id}`}
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalCenterTitle"
                aria-hidden="true"
              >
                <div
                  className="modal-dialog modal-dialog-centered"
                  role="document"
                >
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalCenterTitle">
                        Saved Addresses
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <AddressForm
                        address_id={this.props.id}
                        update={true}
                        add={false}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
