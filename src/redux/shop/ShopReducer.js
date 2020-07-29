import { fetchProducts } from './ShopAction'
const INITIAL_STATE = {
  products: [],
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return {
        ...state,
        products: fetchProducts(action.payload),
      };
    default:
      return state;
  }
};

export default shopReducer