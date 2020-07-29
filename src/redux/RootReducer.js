import { combineReducers } from "redux";
import CartReducer from "./cart/CartReducer";
import ShopReducer from "./shop/ShopReducer";

export default combineReducers({
  cart: CartReducer,
  shop: ShopReducer,
});
