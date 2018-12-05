import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import * as actionCreators from "../store/actions";
// import { connect } from "react-redux";
class OrderProductRow extends Component {
  render() {
    const itemId = this.props.products.find(
      item =>
        item.name.toLowerCase() === this.props.orderProduct.name.toLowerCase()
    );
    return (
      <tr>
        <th scope="row" className="text-center">
          <Link to={`/items/${itemId.id}`}>{this.props.orderProduct.name}</Link>
        </th>
        <td className="text-center">{this.props.orderProduct.price}</td>
        <td className="text-center">{this.props.orderProduct.quantity}</td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products.products
});

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchOrder: userId => dispatch(actionCreators.fetchOrder(userId))
//   };
// };
export default connect(mapStateToProps)(OrderProductRow);
