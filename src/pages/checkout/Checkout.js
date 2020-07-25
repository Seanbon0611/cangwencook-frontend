import React from "react";
import { useSelector } from 'react-redux'

const Checkout = () => {
  const cart = useSelector(state => state.cart.cartItems)
  const subtotal = cart.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
  const tax = subtotal * 0.08
  const total = subtotal + tax
  return (
    <div>
      <h3>Checkout Page</h3>
      <p>Items go here</p>
      <p>{`Subtotal: $${subtotal.toFixed(2)}`}</p>
      <p>{`Tax: $${tax.toFixed(2)}`}</p>
      <p>{`Total: $${total.toFixed(2)}`}</p>
    </div>
  );
};
export default Checkout;
