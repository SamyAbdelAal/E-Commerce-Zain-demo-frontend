import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

// export const setLoading = () => ({
//   type: actionTypes.SET_PRODUCTS_LOADING
// });

export const checkout = cart => {
  return dispatch => {
    instance
      .post(`api/create/order/`, cart)
      .then(res => res.data)
      .then(cart => {
        dispatch({
          type: actionTypes.POST_CHECKOUT,
          payload: cart
        });
      })
      .catch(err => console.error(err));
  };
};

export const addProduct = product => {
  return {
    type: actionTypes.ADD_PRODUCT,
    payload: product
  };
};

export const removeItemFromCart = item => ({
  type: actionTypes.REMOVE_ITEM,
  payload: item
});
