import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  cart: [],
  cartProducts: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return {
        ...state,
        cart: state.cart.concat(action.payload.productID),
        cartProducts: state.cartProducts.concat(action.payload.item),
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
