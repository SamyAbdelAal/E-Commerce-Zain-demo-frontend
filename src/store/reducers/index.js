import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import productsReducer from "./products";
import productReducer from "./productReducer";
import profileReducer from "./userProfileReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  products: productsReducer,
  product: productReducer,
  profile: profileReducer
});
