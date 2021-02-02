import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import CheckoutForm from "../../components/checkout-form/CheckoutForm";
import CheckoutItem from "../../components/checkout-item/CheckoutItem";
import CustomButton from "../../components/custom-button/CustomButton";
import OrderConfirmation from "../order-confirmation/OrderConfirmation";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Divider } from "@material-ui/core";
import axios from "axios";
import "./checkout.styles.scss";

const Checkout = ({ currentUser }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const stripe = useStripe();
  const elements = useElements();
  const [success, setSuccess] = useState(false);
  const [isProcessing, setProcessing] = useState(false);
  const [checkoutError, setCheckoutError] = useState();
  const cart = useSelector((state) => state.cart.cartItems);
  const subtotal = cart.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax + 6.0;

  const handleCardDetailsChange = (e) => {
    e.error ? setCheckoutError(e.error.message) : setCheckoutError();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const billingDetails = {
      name: `${e.target.firstName.value} ${e.target.lastName.value}`,
      email: e.target.email.value,
      address: {
        city: e.target.city.value,
        line1: e.target.address1.value,
        line2: e.target.address2.value,
        state: e.target.state.value,
        postal_code: e.target.zipcode.value,
      },
    };
    setProcessing(true);
    try {
      const { data: cs } = await axios.post("http://localhost:3000/secret", {
        amount: 5000,
      });

      const cardElement = elements.getElement(CardElement);

      const paymentMethodReq = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: billingDetails,
      });

      if (paymentMethodReq.error) {
        setCheckoutError(paymentMethodReq.error.message);
        setProcessing(false);
        return;
      }

      const { error } = await stripe.confirmCardPayment(cs, {
        payment_method: paymentMethodReq.paymentMethod.id,
      });

      if (error) {
        setCheckoutError(error.message);
        setProcessing(false);
        return;
      }
      const orderComplete = await fetch(
        "http://localhost:3000/order/complete",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user_id: currentUser,
            total: total,
            payment_status: "Paid",
          }),
        }
      )
        .then((res) => res.json())
        .then(console.log);
      setSuccess(true);
    } catch (err) {
      setCheckoutError(err.message);
    }
  };

  if (success) {
    return <OrderConfirmation />;
  } else {
    return (
      <div className="checkout-container">
        <h3 className="checkout-header">Check Out</h3>
        <div className="checkout-details">
          <div>
            {cart.length ? (
              <div>
                <form onSubmit={handleSubmit}>
                  <CheckoutForm />
                  <div className="payment-info">
                    <CardElement
                      className="card-input"
                      onChange={handleCardDetailsChange}
                    />
                  </div>
                  {checkoutError && (
                    <h1 style={{ color: "red" }}>{checkoutError}</h1>
                  )}
                  <CustomButton disabled={isProcessing} type="submit ">
                    {isProcessing ? "Processing..." : "Place Order"}
                  </CustomButton>
                </form>
              </div>
            ) : null}
          </div>
          <div>
            {cart.length ? (
              [
                cart.map((item) => {
                  return (
                    <div key={item.name} className="">
                      <CheckoutItem key={item.id} item={item} />
                    </div>
                  );
                }),
                <div className="totals">
                  <Divider />
                  <p>{`Subtotal: $${subtotal.toFixed(2)}`}</p>
                  <p>{`Tax: $${tax.toFixed(2)}`}</p>
                  <p>Shipping: $6.00</p>
                  <Divider />
                  <p>{`Total: $${total.toFixed(2)}`}</p>
                </div>,
              ]
            ) : (
              <h1 className="cart-empty" variant="body1">
                Your Cart is Empty!
              </h1>
            )}
          </div>
        </div>
      </div>
    );
  }
};
export default Checkout;
