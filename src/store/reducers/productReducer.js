import * as actionTypes from "../actions/actionTypes";

const initialState = {
  product: {},
  loading: true
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT:
      return {
        ...state,
        product: action.payload,
        loading: false
      };
    case actionTypes.SET_PRODUCT_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
