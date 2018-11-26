import { combineReducers } from "redux";

// Reducers
import authReducer from "./authentication";
import errorReducer from "./errors";
import productsReducer from "./products";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import profileReducer from "./userProfileReducer";
import addressReducer from "./addressReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  products: productsReducer,
  product: productReducer,
  cart: cartReducer,
  profile: profileReducer,
  addresses: addressReducer,
  order: orderReducer
});
