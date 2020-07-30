import React from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { addItem, removeItemFromCart } from "../../redux/cart/CartAction";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./product-details.styles.scss";

const ProductDetails = ({ item, currentOrder }) => {
  console.log(item)
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const addLineItem = await axios.post("http://localhost:3000", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: {
        order_id: currentOrder.id,
        product_id: item.id,
      },
    });

  };
  const dispatch = useDispatch();
  const handleClicks = async (item) => {
    const addLineItem = await fetch("http://localhost:3000/lineitem/new", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        order_id: currentOrder.id,
        product_id: item.id,
      })
    });
    dispatch(addItem(item))
  };
  return (
    <div className="product-details-container">
      <div className="product-name">
        <span>{item.name}</span>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="item-price">
          <p>{`$${item.price}`}</p>
        </div>
        <div className="sizes">
          <select name="size" id="size" onChange={handleChange}>
            <option>Size</option>
            <option className="size-option" value="xs">
              X-Small
            </option>
            <option className="size-option" value="s">
              Small
            </option>
            <option className="size-option" value="m">
              Medium
            </option>
            <option className="size-option" value="l">
              Large
            </option>
            <option className="size-option" value="xl">
              X-Large
            </option>
            <option className="size-option" value="xxl">
              XX-Large
            </option>
          </select>
        </div>
        <div className="quantity-container">
          <p>Quantity:</p>
          <div className="quantity">
            <div className="plus-minus" onClick={() => dispatch(removeItemFromCart(item))}>&#45;</div>
            <span className="value">1</span>
            <div className="plus-minus" onClick={() => dispatch(addItem(item))}>&#43;</div>
          </div>
        </div>
        <div className="add-to-btns">
          <div className="add-to-cart">
            <CustomButton
              style={{ width: "180px" }}
              type="submit"
              onClick={() => handleClicks(item)}
            >
              ADD TO CART
            </CustomButton>
          </div>
          <div>
            <CustomButton inverted>ADD TO WISHLIST</CustomButton>
          </div>
          <p>Product Info</p>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
