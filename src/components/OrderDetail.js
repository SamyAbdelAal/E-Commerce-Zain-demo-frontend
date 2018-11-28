import React, { Component } from "react";
import OrderProduct from "./OrderProductRow";
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
  componentDidMount() {
    this.props.fetchOrder(this.props.match.params.orderID);
  }
  render() {
    const order = this.props.order;

    const productOrderRows = order.order_product.map(orderProduct => (
      <OrderProduct key={order.id} orderProduct={orderProduct} />
    ));

    return (
      <div className="container">
        <h1>Order {order.id}</h1>
        <h1>Address:</h1>
        <p>{order.address.governorate}</p>
        <h1>Order Products</h1>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">ProductName</th>
              <th scope="col">Product Price</th>
              <th scope="col">Quantity</th>
              <th scope="col" />
            </tr>
          </thead>
          <tbody>{productOrderRows}</tbody>
        </table>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    order: state.order.order
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchOrder: orderID => dispatch(actionCreators.fetchOrder(orderID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderDetail);
