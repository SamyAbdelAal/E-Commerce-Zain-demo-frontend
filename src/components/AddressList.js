import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AddressCard from "./AddressCard";

class AddressList extends Component {
  render() {
    const addresses = this.props.addresses.map(address => (
      <AddressCard type={this.props.type} key={address.id} address={address} />
    ));
    return (
      <div
        className="modal fade"
        id="addressList"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="Addresses"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
            <div className="modal-body">{addresses}</div>
            {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  addresses: state.addresses.addresses
});

export default connect(mapStateToProps)(AddressList);
