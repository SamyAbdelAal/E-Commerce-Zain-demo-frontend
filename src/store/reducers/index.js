import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import productsReducer from "./products";
import productReducer from "./productReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  products: productsReducer,
  product: productReducer
});
