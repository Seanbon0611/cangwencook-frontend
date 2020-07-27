import React from "react";
import { useSelector } from "react-redux";
import Product from "../../components/product/Product";
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'
import "./shop-styles.scss";

const ShopPage = ({ products }) => {
  const hidden = useSelector((state) => state.cart.hidden);
  console.log(hidden)
  return (
    <div>
      <h1>Shop</h1>
      <CartIcon className="option" />
      <p>Wishlist</p>
      {hidden ? null : <CartDropdown />}
      <div className="collections-container">
      {products.map((product) => {
        return <Product key={product.attributes.id} product={product.attributes} />;
      })}
      </div>
      </div>
      );
    };
    
    export default ShopPage;
    