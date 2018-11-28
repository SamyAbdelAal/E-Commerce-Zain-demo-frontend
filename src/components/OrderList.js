import React, { Component } from "react";
import { connect } from "react-redux";

// Components

import OrderRow from "./OrderRow";
// import Loading from "./Loading";

class OrderList extends Component {
  render() {
    const orderRows = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} />
    ));

    return (
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col">OrderId</th>
            <th scope="col">TimeStamp</th>
            <th scope="col">status</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>{orderRows}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.order.orders
  };
};

export default connect(mapStateToProps)(OrderList);
