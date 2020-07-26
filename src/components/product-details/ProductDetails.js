import React from "react";
import FormInput from "../../components/form-input/FormInput";
import { addItem } from "../../redux/cart/CartAction";
import { Button, Typography, Select, MenuItem } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

const ProductDetails = ({ item }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div>
    <label>s</label>
    <input type='radio' name='size' value='s' />
      <form onSubmit={handleSubmit}>
        <div className="add-to-cart-form">
          <div>
            <Typography variant="h5">{item.price}</Typography>
          </div>
          <div className="quantity">
            <label style={{ fontSize: "15px", color: "black" }}>
              Quantity:
            </label>
            <div className="number-field">
              <FormInput min="1" type="number" />
            </div>
          </div>
        </div>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={() => dispatch(addItem(item))}
        >
          ADD TO CART
        </Button>
      </form>
    </div>
  );
};

export default ProductDetails;
