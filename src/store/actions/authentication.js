import axios from "axios";
import jwt_decode from "jwt-decode";

import * as actionTypes from "./actionTypes";

import { setErrors } from "./errors";

const instance = axios.create({
  // baseURL: "http://192.168.1.13:8000/"
  baseURL: "http://127.0.0.1:8000/"
});

const setAuthToken = token => {
  if (token) {
    localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkForExpiredToken = () => {
  return dispatch => {
    // Get token
    const token = localStorage.token;

    if (token) {
      const currentTime = Date.now() / 1000;

      // Decode token and get user info
      const user = jwt_decode(token);

      // Check token expiration
      if (user.exp >= currentTime) {
        // Set auth token header
        setAuthToken(token);
        // Set user
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

export const login = (userData, history) => {
  console.log(userData);

  return dispatch => {
    instance
      .post("api/login/", userData)
      .then(res => res.data)
      .then(user => {
        const decodedUser = jwt_decode(user.token);
        setAuthToken(user.token);
        dispatch(setCurrentUser(decodedUser));
        history.push("/items");
      })
      .catch(err => dispatch(setErrors(err.response.data)));
  };
};

export const signup = (userData, history) => {
  return dispatch => {
    instance
      .post("api/register/", userData)
      .then(res => res.data)
      .then(user => {
        // const decodedUser = jwt_decode(user.token);
        // setAuthToken(user.token);
        dispatch(login(userData, history));
      })
      .catch(err => {
        if (err.response) dispatch(setErrors(err.response.data));
      });
  };
};

export const logout = dispatch => {
  setAuthToken();

  return setCurrentUser();
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});
