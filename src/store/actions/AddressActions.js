import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export const setLoading = () => ({
  type: actionTypes.SET_PRODUCTS_LOADING
});

export const fetchAddresses = user => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get("/api/address/list/")
      .then(res => res.data)
      .then(addresses => {
        return dispatch({
          type: actionTypes.FETCH_ADDRESSES,
          payload: { addresses, user }
        });
      })
      .catch(err => alert(err));
  };
};
