import CartActionTypes from './CartTypes';

export const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = item => {
  return {
    type: CartActionTypes.ADD_ITEM
  }
}