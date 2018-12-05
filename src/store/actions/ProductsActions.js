import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.13:8000/"
  //baseURL: "http://127.0.0.1:8000/"

});

export const setLoading = () => ({
  type: actionTypes.SET_PRODUCTS_LOADING
});

export const fetchProducts = () => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get("/api/product/list/")
      .then(res => res.data)
      .then(products =>
        dispatch({
          type: actionTypes.FETCH_PRODUCTS,
          payload: products
        })
      )
      .catch(err => alert(err));
  };
};

export const filterProducts = query => {
  return {
    type: actionTypes.FILTER_PRODUCTS,
    payload: query
  };
};

export const filterCategory = query => {
  return {
    type: actionTypes.FILTER_CATEGORY,
    payload: query
  };
};
