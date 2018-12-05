import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
// Components
import Loading from "./Loading";

import OrderRow from "./OrderRow";
// import Loading from "./Loading";

class OrderList extends Component {
  componentDidMount() {
    if (!this.props.user) {
      this.props.history.push("/login");
    }
  }

  componentDidUpdate() {
    if (!this.props.user) {
      this.props.history.push("/");
    }
  }

  render() {
    const orderRows = this.props.orders.map(order => (
      <OrderRow key={order.id} order={order} />
    ));
    if (this.props.loading) {
      return <Loading />;
    } else if (!this.props.user) {
      this.props.history.push("/");
      return null;
    } else {
      return (
        <div class="near_by_hotel_wrapper">
          <div class="near_by_hotel_container">
            <table className="table no-border custom_table dataTable no-footer dtr-inline">
              <colgroup>
                <col width="10%" />
                <col width="40%" />
                <col width="" />
              </colgroup>
              <thead className="thead-dark">
                <tr>
                  <th scope="col" className="text-center">
                    OrderId
                  </th>
                  <th scope="col" className="text-center">
                    Ordered On
                  </th>
                  <th scope="col" className="text-center">
                    status
                  </th>
                  <th scope="col" />
                </tr>
              </thead>
              <tbody>{orderRows}</tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    orders: state.order.orders,
    loading: state.order.loading
  };
};

export default withRouter(connect(mapStateToProps)(OrderList));
