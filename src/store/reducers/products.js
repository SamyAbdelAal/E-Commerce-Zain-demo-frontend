import * as actionTypes from "../actions/actionTypes";

const initialState = {
  products: [],
  filteredProducts: [],
  filteredCategory: [],
  loading: true
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
          console.log(action.payload.toLowerCase());
          return `${product.name}`
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }),
        loading: false
      };
    case actionTypes.FILTER_CATEGORY:
      return {
        ...state,
        filteredProducts: state.products.filter(product => {
          return `${product.category}`
            .toLowerCase()
            .includes(action.payload.toLowerCase());
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
