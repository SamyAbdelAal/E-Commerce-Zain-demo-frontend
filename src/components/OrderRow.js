import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import OrderDetail from "./OrderDetail";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class OrderRow extends Component {
  render() {
    let order = this.props.order;
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric"
    };
    var date = new Date(order.ordered_on);

    return (
      <tr>
        <th className="text-center">{order.id}</th>
        <td className="text-center">
          {date.toLocaleDateString("ar-EG", options)}|{" "}
          {date.toLocaleDateString("en-US", options)}
        </td>

        <td className="text-center">{order.status}</td>
        <td>
          <Link to={`/orders/${order.id}`}>View</Link>
        </td>
      </tr>
    );
  }
}

export default OrderRow;
