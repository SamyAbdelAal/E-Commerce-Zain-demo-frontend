import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const fetchOrders = () => {
  return dispatch => {
    instance
      .get("api/order/list/")
      .then(res => res.data)

      .then(orders => {
        dispatch({
          type: actionTypes.FETCH_ORDERS,
          payload: orders
        });
      })
      .catch(err => console.error(err));
  };
};

export const fetchOrder = orderId => {
  return dispatch => {
    instance
      .post(`api/order/${orderId}/detail/`)
      .then(res => res.data)
      .then(order => {
        dispatch({
          type: actionTypes.FETCH_ORDER,
          payload: order
        });
      })
      .catch(err => console.error(err));
  };
};
