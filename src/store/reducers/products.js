import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload
      };

    default:
      return state;
  }
};

export default reducer;
