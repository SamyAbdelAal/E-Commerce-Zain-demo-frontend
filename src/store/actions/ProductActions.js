import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.1.13:8000/"
  baseURL: "http://127.0.0.1:8000/"
});

const setLoading = () => ({
  type: actionTypes.SET_PRODUCT_LOADING
});

export const fetchProduct = itemID => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get(`api/product/${itemID}/detail/`)
      .then(res => res.data)
      .then(item => {
        dispatch({
          type: actionTypes.FETCH_PRODUCT,
          payload: item
        });
      })
      .catch(err => console.error(err));
  };
};

export default fetchProduct;
