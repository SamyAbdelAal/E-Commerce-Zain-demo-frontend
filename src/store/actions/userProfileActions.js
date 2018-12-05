import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.1.13:8000/"
 // baseURL: "http://127.0.0.1:8000/"
});

const setLoading = () => ({
  type: actionTypes.SET_PROFILE_LOADING
});

export const fetchUserProfile = () => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get(`api/profile/`)
      .then(res => res.data)
      .then(profile => {
        dispatch({
          type: actionTypes.FETCH_USER_PROFILE,
          payload: profile
        });
      })
      .catch(err => console.error(err));
  };
};

export const updateUserProfile = (profileInfo, userID, history) => {
  return dispatch => {
    instance
      .put(`api/profile/${userID}/update/`, profileInfo)
      .then(res => res.data)
      .then(profile => {
        dispatch({
          type: actionTypes.UPDATE_USER_PROFILE,
          payload: profileInfo
        });
        history.goBack();
      }
      .catch(err => console.error(err.response.data));
  };
};

export default fetchUserProfile;
