import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
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

export const updateAddress = (addressInfo, history, address_id) => {
  console.log(address_id);
  return dispatch => {
    instance
      .put(`api/address/${address_id}/update/`, addressInfo)
      .then(res => res.data)
      .then(addressInfo => {
        dispatch({
          type: actionTypes.UPDATE_ADDRESS,
          payload: addressInfo
        });
        history.push("Profile");
      })
      .catch(err => console.error(err.response.data));
  };
};
