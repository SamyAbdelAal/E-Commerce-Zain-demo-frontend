import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import * as actionCreators from "../store/actions";

class Cart extends Component {
  handleCheckout() {
    this.props.checkout(this.props.cart);
  }
  render() {
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
          <div className="col-xs-8">
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
                        <span className="glyphicon glyphicon-share-alt" />{" "}
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
                  <div className="col-xs-3">
                    <button
                      onClick={() => this.handleCheckout()}
                      type="button"
                      className="btn btn-success btn-block"
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
  cart: state.cart.cart
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
