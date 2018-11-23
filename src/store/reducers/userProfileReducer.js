import * as actionTypes from "../actions/actionTypes";

const initialState = {
  profile: {},
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_PROFILE:
      return {
        ...state,
        profile: action.payload,
        loading: false
      };
    case actionTypes.SET_PROFILE_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
