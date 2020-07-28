import React from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/checkout-form/CheckoutForm";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import CustomButton from "../../components/custom-button/CustomButton";
import { Divider } from "@material-ui/core";
import "./checkout.styles.scss";

const Checkout = () => {
  const cart = useSelector((state) => state.cart.cartItems);
  const subtotal = cart.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax + 6.0;
  return (
    <div className="checkout-container">
      <h3 className="checkout-header">Check Out</h3>
      <div className="checkout-details">
        <div>{cart.length ? <CheckoutForm /> : null}</div>
        <div>
          {cart.length ? (
            cart.map((item) => {
              return (
                <div className="">
                  <CheckoutItem key={item.id} item={item} />
                  <Divider />
                  <p>{`Subtotal: $${subtotal.toFixed(2)}`}</p>
                  <p>{`Tax: $${tax.toFixed(2)}`}</p>
                  <p>Shipping: $6.00</p>
                  <Divider />
                  <p>{`Total: $${total.toFixed(2)}`}</p>
                  <CustomButton>Place Order</CustomButton>
                </div>
              );
            })
          ) : (
            <h1 className="cart-empty" variant="body1">
              Your Cart is Empty!
            </h1>
          )}
        </div>
      </div>
    </div>
  );
};
export default Checkout;
