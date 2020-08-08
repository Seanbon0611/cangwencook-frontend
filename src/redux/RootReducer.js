import { combineReducers } from "redux";
import CartReducer from "./cart/CartReducer";
import ShopReducer from "./shop/ShopReducer";
import UserReducer from "./user/UserReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const rootReducer = combineReducers({
  cart: CartReducer,
  shop: ShopReducer,
  user: UserReducer,
});

export default persistReducer(persistConfig, rootReducer);
