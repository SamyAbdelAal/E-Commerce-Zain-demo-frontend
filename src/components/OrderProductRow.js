import React, { Component } from "react";
// import { Link, Redirect } from "react-router-dom";
import * as actionCreators from "../store/actions";
// import { connect } from "react-redux";
class OrderProductRow extends Component {
  render() {
    return (
      <tr>
        <th scope="row">{this.props.orderProduct.name}</th>
        <td>{this.props.orderProduct.price}</td>
        <td>{this.props.orderProduct.quantity}</td>
      </tr>
    );
  }
}

// const mapStateToProps = state => ({
//   user: state.auth.user
// });

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchOrder: userId => dispatch(actionCreators.fetchOrder(userId))
//   };
// };
export default OrderProductRow;
