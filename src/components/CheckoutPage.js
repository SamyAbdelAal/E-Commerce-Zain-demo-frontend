import React, { Component } from "react";
import { Link, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutItem from "./CheckoutItem";
import * as actionCreators from "../store/actions";

class CheckoutPage extends Component {
  handleCheckout() {
    this.props.checkout(this.props.cart);
  }
  render() {
    const cartCheckout = this.props.cartCheckout.map(item => (
      <CheckoutItem item={item} />
    ));
    // let totalPrice = this.props.cartCheckout.forEach(
    //   item => (totalPrice += item.price)
    // );
    let total = cart => {
      let sum = 0;
      for (let i = 0; i < cart.length; i++) {
        sum += parseFloat(cart[i].price);
      }
      return sum;
    };
    return (
      <div className="container">
        <div class="row">
          <div class="col-xs-8">
            <div class="panel panel-info">
              <div class="panel-heading">
                <div class="panel-title">
                  <div class="row">
                    <div class="col-xs-6">
                      <h5>
                        <span class="glyphicon glyphicon-shopping-cart" />{" "}
                        Shopping Cart
                      </h5>
                    </div>
                    <div class="col-xs-6">
                      <button
                        type="button"
                        class="btn btn-primary btn-sm btn-block"
                      >
                        <span class="glyphicon glyphicon-share-alt" /> Continue
                        shopping
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="panel-body">
                <hr />
                {cartCheckout}
                <div class="row">
                  <div class="text-center">
                    <div class="col-xs-9">
                      <h6 class="text-right">Added items?</h6>
                    </div>
                    <div class="col-xs-3">
                      <button
                        type="button"
                        class="btn btn-default btn-sm btn-block"
                      >
                        Update cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="panel-footer">
                <div class="row text-center">
                  <div class="col-xs-9">
                    <h4 class="text-right">
                      Total <strong>{total(this.props.cartCheckout)}</strong>
                    </h4>
                  </div>
                  <div class="col-xs-3">
                    <button
                      onClick={() => this.handleCheckout()}
                      type="button"
                      class="btn btn-success btn-block"
                    >
                      Checkout
                    </button>
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

const mapStateToProps = state => ({
  user: state.auth.user,
  cart: state.cart.cart,
  cartCheckout: state.cart.cartProducts
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
  )(CheckoutPage)
);
