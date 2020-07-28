import React from "react";
import "./product-showcase.styles.scss";
const ProductShowcase = ({ item }) => {
  return (
    <div className="product-showcase-container">
      <div className="alt-img-container">
        <div className="alt-image1">
          <img
            className="alt-image"
            src="https://storage.cloud.google.com/can-gwen-cook-pics/Logo_Standard-Color_mockup_Front_Flat_White.jpg"
            alt=""
          />
        </div>
        <div className="alt-image2">
          <img
            className="alt-image"
            src="https://storage.cloud.google.com/can-gwen-cook-pics/Logo_Standard-Color_mockup_Front_Flat_White.jpg"
            alt=""
          />
        </div>
        <div className="alt-image3">
          <img
            className="alt-image"
            src="https://storage.cloud.google.com/can-gwen-cook-pics/Logo_Standard-Color_mockup_Front_Flat_White.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="main-image-container">
        <img className="main-image" src={item.image} alt="" />
      </div>
    </div>
  );
};

export default ProductShowcase;
