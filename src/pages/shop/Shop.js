import React from "react";
import Product from "../../components/product/Product";
import ShopHeader from "../../components/shop-header/ShopHeader";
import "./shop-styles.scss";

const ShopPage = ({ products }) => {
  return (
    <div className='shop-container'>
      <ShopHeader />
      <div className="collections-container">
        {products
          ? products.map((product) => {
              return (
                <Product
                  key={product.attributes.id}
                  product={product.attributes}
                />
              );
            })
          : "Loading..."}
      </div>
    </div>
  );
};

export default ShopPage;
