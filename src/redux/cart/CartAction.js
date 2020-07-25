export const toggleCartHidden = () => ({
  type: "TOGGLE_CART_HIDDEN",
});

export const addItem = (item) => ({
  type: "ADD_ITEM",
  payload: item,
});

export const cartTotal = (total) => ({
  type: "GET_TOTAL",
  payload: total,
});
