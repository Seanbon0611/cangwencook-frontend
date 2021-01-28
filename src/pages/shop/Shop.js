import React from "react";
import Product from "../../components/product/Product";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";
import Socials from "../../components/socials/Socials";
import Spinner from "../../components/spinner/Spinner";
import TagInstagram from "../../components/tag-ig/TagInstagram";
import "./shop-styles.scss";

const ShopPage = ({ products, recipes }) => {
  const topThree = recipes.slice(0, 3);
  return (
    <div className="shop-container">
      <div className="title-socials">
        <div className="shop-header">
          <h1 style={{ color: "var(--main)" }}>Shop</h1>
          <h2 style={{ color: "var(--secondary)" }}>Coming soon!</h2>
        </div>
        <div className="links-to-socials">
          <span style={{ paddingRight: "10px" }}>Follow Us</span>
          <div style={{ width: "128px" }}>
            <Socials />
          </div>
        </div>
      </div>
      <div className="collections-container">
        {products ? (
          products.map((product) => {
            return (
              <Product
                key={product.attributes.id}
                product={product.attributes}
              />
            );
          })
        ) : (
          <Spinner />
        )}
      </div>
      <TagInstagram />
      <hr className="divider"></hr>
      <div style={{ padding: "10px 0px" }}></div>
      <div className="top-recipes-mobile">
        <RecipeCarousel recipes={topThree} />
      </div>
    </div>
  );
};

export default ShopPage;
