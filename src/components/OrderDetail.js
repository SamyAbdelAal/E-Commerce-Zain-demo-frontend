import React, { Component } from "react";

// Components
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

class OrderDetail extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       quantity: 1
  //     };

  //     this.changeHandler = this.changeHandler.bind(this);
  //   }
  render() {
    return <div />;
  }
}
const mapStateToProps = state => {
  return {
    item: state.product.product,
    loading: state.product.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProduct: itemID => dispatch(actionCreators.fetchProduct(itemID)),
    addProduct: product => dispatch(actionCreators.addProduct(product))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
