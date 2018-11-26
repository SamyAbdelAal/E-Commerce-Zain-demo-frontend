import * as actionTypes from "../actions/actionTypes";

const initialState = {
  orders: [],
  order: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ORDERS:
      const orders = action.payload;
      return {
        ...state,
        orders: orders
      };
    case actionTypes.FETCH_ORDER:
      const order = action.payload;
      return {
        ...state,
        order: action.payload
      };
    default:
      return state;
  }
};

export default reducer;
