import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.100.32:8000/"
});

export const setLoading = () => ({
  type: actionTypes.SET_ADDRESS_LOADING
});

export const createAddress = addressDetail => {
  return dispatch => {
    console.log(addressDetail);

    instance
      .post("api/address/create/", addressDetail)
      .then(res => res.data)
      .then(addressDetail => {
        dispatch({
          type: actionTypes.CREATE_ADDRESS,
          payload: addressDetail
        });
      })
      .catch(err => console.error(err));
  };
};

export const fetchAddresses = () => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get("/api/address/list/")
      .then(res => res.data)
      .then(addresses => {
        return dispatch({
          type: actionTypes.FETCH_ADDRESSES,
          payload: addresses
        });
      })
      .catch(err => alert(err));
  };
};
