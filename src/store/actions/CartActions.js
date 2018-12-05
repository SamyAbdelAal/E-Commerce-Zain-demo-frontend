import * as actionTypes from "./actionTypes";
import { fetchOrders } from "./orderActions";
import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.13:8000/"
  baseURL: "http://127.0.0.1:8000/"
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
      .then(order => dispatch(fetchOrders()))
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

export const changeQuantity = (itemId, quantity) => {
  return {
    type: actionTypes.CHANGE_QUANTITY,
    payload: { itemId: itemId, quantity: quantity }
  };
};
