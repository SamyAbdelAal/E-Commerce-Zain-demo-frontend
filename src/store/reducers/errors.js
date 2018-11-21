import { SET_ERRORS } from "../actions/actionTypes";

const initialState = { error: {} };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
