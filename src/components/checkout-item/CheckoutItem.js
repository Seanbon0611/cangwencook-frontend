import React from "react";
import { useDispatch } from 'react-redux'
import { clearItemFromCart } from '../../redux/cart/CartAction'
import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="checkout-item-container">
      <div className='chkout-image-cont'>
        <img className="checkout-img" src={item.image} alt="" />
      </div>
      <div className="checkout-item-details">
        <h3>{item.name}</h3>
        <p>Size: M</p>
        <p>Quantity: {item.quantity}</p>
        <div className='chkout-group'>
        <p className='grp-item'>${item.price}</p>
        <span className='grp-item2' onClick={() => dispatch(clearItemFromCart(item))}>Remove</span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItem;
