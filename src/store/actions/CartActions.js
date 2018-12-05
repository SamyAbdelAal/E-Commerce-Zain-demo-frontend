import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.13:8000/"
});

// export const setLoading = () => ({
//   type: actionTypes.SET_PRODUCTS_LOADING
// });

export const checkout = cartWithAddress => {
  return dispatch => {
    instance
      .post("api/order/create/", cartWithAddress)
      .then(res => res.data)
      .then(order => {
        dispatch({
          type: actionTypes.POST_CHECKOUT,
          payload: order
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

export const setAddress = addressId => {
  return {
    type: actionTypes.SET_ADDRESS,
    payload: addressId
  };
};
