import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class OrderRow extends Component {
  render() {
    let order = this.props.order;
    console.log(order);
    return (
      <tr>
        <th scope="row">{order.id}</th>
        <td>{order.ordered_on}</td>
        <td>{order.status}</td>
        <td>
          <Link to={`/orders/${order.id}`}>View</Link>
        </td>
      </tr>
    );
  }
}

export default OrderRow;
