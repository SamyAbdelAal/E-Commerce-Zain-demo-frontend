import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: true,
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      let newProduct = action.payload;
      let cartItem = state.cart.find(cartItem => cartItem.id === newProduct.id);
      let cart;
      if (cartItem) {
        cartItem.quantity =
          parseInt(cartItem.quantity) + parseInt(newProduct.quantity);
        cart = [...state.cart];
      } else {
        cart = state.cart.concat(newProduct);
      }
      return {
        ...state,
        cart,
        loading: false
      };
    case actionTypes.REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(item => item !== action.payload)
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
