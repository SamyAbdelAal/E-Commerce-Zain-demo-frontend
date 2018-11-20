import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const setLoading = () => ({
  type: actionTypes.SET_PRODUCTS_LOADING
});

export const fetchProducts = () => {
  return dispatch => {
    instance
      .get("/api/list/")
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
