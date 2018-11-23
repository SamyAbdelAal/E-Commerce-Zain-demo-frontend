import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  filteredProducts: [],
  loading: true,
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
        loading: false
      };
    case actionTypes.FILTER_PRODUCTS:
      return {
        ...state,
        filteredProducts: state.products.filter(product => {
          return `${product.name}`.toLowerCase().includes(action.payload);
        }),
        loading: false
      };
    case actionTypes.SET_PRODUCTS_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default reducer;
