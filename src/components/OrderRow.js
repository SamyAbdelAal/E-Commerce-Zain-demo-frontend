import React, { Component } from "react";
// import { Link } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class OrderRow extends Component {
  handleCheckout() {
    if (this.props.user && this.props.address) {
      this.props.fetchOrder(this.props.user);
    } else {
      this.props.history.push("/login");
    }
  }
  render() {
    let order = this.props.order;
    return (
      <tr>
        <th scope="row">{order.id}</th>
        <td>{order.ordered_on}</td>
        <td>{order.status}</td>
        <td>
          <link to={`/order/${order.id}`}>View</link>
        </td>
      </tr>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user
});

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: userId => dispatch(actionCreators.fetchOrder(userId))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderRow);
