import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import * as actionCreators from "../store/actions";
import AddressForm from "./AddressForm";
import AddressCard from "./AddressCard";
class Cart extends Component {
  handleCheckout() {
    if (this.props.user && this.props.address) {
      const cartWithAddress = {
        address: this.props.address,
        cart: this.props.cart
      };

      this.props.checkout(cartWithAddress);
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    const addresses = this.props.addresses.map(address => (
      <AddressCard key={address.id} address={address} />
    ));
    const address = this.props.addresses.find(
      address => address.id === this.props.address
    );
    const cartItems = this.props.cart.map(order => (
      <CartItem key={order.id} order={order} />
    ));
    let total = cart => {
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        sum += parseFloat(cart[i].item.price) * cart[i].quantity;
      }
      return sum;
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="panel panel-info">
              <div className="panel-heading">
                <div className="panel-title">
                  <div className="row">
                    <div className="col-xs-6">
                      <h5>
                        <span className="glyphicon glyphicon-shopping-cart" />
                        Shopping Cart
                      </h5>
                    </div>
                    <div className="col-xs-6">
                      <Link
                        type="button"
                        className="btn btn-primary btn-sm btn-block"
                        to="/items"
                      >
                        <span className="glyphicon glyphicon-share-alt" />
                        Continue shopping
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel-body">
                <hr />
                {cartItems}
              </div>
              <div className="panel-footer">
                <div className="row text-center">
                  <div className="col-xs-9">
                    <h4 className="text-right">
                      Total <strong>{total(this.props.cart)}</strong>
                    </h4>
                  </div>

                  <div
                    className="modal fade"
                    id="addressList"
                    tabIndex="-1"
                    role="dialog"
                    aria-labelledby="Addresses"
                    aria-hidden="true"
                  >
                    <div
                      className="modal-dialog modal-dialog-centered"
                      role="document"
                    >
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5
                            className="modal-title"
                            id="exampleModalCenterTitle"
                          >
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
                  <div>
                    <h4>Order Address</h4>
                    {this.props.address ? (
                      <p>{`Governorate: ${address.governorate}/ area: ${
                        address.area
                      }/ block: ${address.block}/ street: ${
                        address.street
                      }/ building_or_house: ${
                        address.building_or_house
                      }/ floor: ${address.floor}/ extra directions: ${
                        address.extra_directions
                      }`}</p>
                    ) : (
                      "No address specified"
                    )}
                  </div>
                  <div className="col-xs-3">
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-toggle="modal"
                      data-target="#addressForm"
                    >
                      Add New Address
                    </button>
                    <div
                      className="modal fade"
                      id="addressForm"
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
                            <h5
                              className="modal-title"
                              id="exampleModalCenterTitle"
                            >
                              Modal title
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
                            <AddressForm />
                          </div>
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
                  </div>
                  <div className="col-xs-3">
                    <button
                      onClick={() => this.handleCheckout()}
                      type="button"
                      className="btn btn-success btn-block"
                    >
                      Checkout
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-toggle="modal"
                    data-target="#addressList"
                  >
                    Choose Address
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
  address: state.cart.address,
  user: state.auth.user,
  addresses: state.addresses.addresses
});

const mapDispatchToProps = dispatch => {
  return {
    checkout: cart => dispatch(actionCreators.checkout(cart))
  };
};
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Cart)
);
