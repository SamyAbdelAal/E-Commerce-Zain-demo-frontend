import React, { Component } from "react";
import OrderProduct from "./OrderProductRow";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";

// Components
import Loading from "./Loading";

class OrderDetail extends Component {
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
      return (
        <div className="container-fluid">
          <h1>Order {order.id}</h1>
          <h1>Address:</h1>
          <h3>
            Governorate:
            {order.address.governorate}
            {"   "} Area: {order.address.area} Block:
            {order.address.block} Street: {order.address.street} Building:
            {"   "}
            {order.address.building_or_house} floor:
            {order.address.floor} Extra directions:
            {"   "}
            {order.address.extra_directions}
            {"   "}
          </h3>

          <h1>Order Products</h1>
          <div class="near_by_hotel_wrapper">
            <div class="near_by_hotel_container">
              <table className="table no-border custom_table dataTable no-footer dtr-inline">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" className="text-center">
                      ProductName
                    </th>
                    <th scope="col" className="text-center">
                      Product Price
                    </th>
                    <th scope="col" className="text-center">
                      Quantity
                    </th>
                  </tr>
                </thead>
                <tbody>{productOrderRows}</tbody>
              </table>
            </div>
          </div>
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
