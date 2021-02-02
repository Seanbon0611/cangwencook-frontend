import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import "./order-confirmation.styles.scss";
const OrderConfirmation = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }, 100);
  });
  return (
    <div className="success-container">
      <Confetti width={width} height={height} numberOfPieces={450} />
      <h1>Score! Thanks For Your Order!</h1>
    </div>
  );
};

export default OrderConfirmation;
