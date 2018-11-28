import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

const setLoading = () => ({
  type: actionTypes.SET_PROFILE_LOADING
});

export const fetchUserProfile = userID => {
  return dispatch => {
    dispatch(setLoading());
    instance
      .get(`api/profile/${userID}/`)
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

export default fetchUserProfile;
