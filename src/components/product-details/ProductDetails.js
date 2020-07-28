import React from "react";
import FormInput from "../../components/form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { addItem } from "../../redux/cart/CartAction";
import { Typography } from "@material-ui/core";
import { useDispatch } from "react-redux";
import "./product-details.styles.scss";

const ProductDetails = ({ item }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  return (
    <div className='product-details-container'>
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
              <option className='size-option' value="xs">X-Small</option>
              <option className='size-option' value="s">Small</option>
              <option className='size-option' value="m">Medium</option>
              <option className='size-option' value="l">Large</option>
              <option className='size-option' value="xl">X-Large</option>
              <option className='size-option' value="xxl">XX-Large</option>
            </select>
            </div>
            <div className='quantity-container'>
            <p>Quantity:</p>
          <div className="quantity">
            <div className="plus-minus">&#45;</div>
            <span className="value">1</span>
            <div className="plus-minus">&#43;</div>
          </div>
          </div>
        <div className="add-to-btns">
          <div className="add-to-cart">
            <CustomButton
              style={{ width: "180px" }}
              type="submit"
              onClick={() => dispatch(addItem(item))}
            >
              ADD TO CART
            </CustomButton>
          </div>
          <div>
            <CustomButton>ADD TO WISHLIST</CustomButton>
          </div>
          <p>Product Info</p>
        </div>
      </form>
    </div>
  );
};

export default ProductDetails;
