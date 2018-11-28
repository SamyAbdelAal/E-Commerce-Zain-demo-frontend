import React, { Component } from "react";
import OrderProduct from "./OrderProductRow";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

// Components
import Loading from "./Loading";

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
    if (!this.props.order.address) {
      return <Loading />;
    } else {
      const productOrderRows = this.props.order.order_product.map(
        orderProduct => (
          <OrderProduct key={this.props.order.id} orderProduct={orderProduct} />
        )
      );
      const order = this.props.order;
      console.log(this.props.order.order_product);
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
}
const mapStateToProps = state => {
  return {
    order: state.order.order,
    loading: state.order.loading
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
