import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import TagInstagram from "../../components/tag-ig/TagInstagram";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";
import "./blog.styles.scss";

const Blog = ({ recipes }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const topThree = recipes.slice(0, 3);
  return (
    <div className="blog-page-container">
      <h1 className="page-title">Blog</h1>
      <div className="coming-soon">
        <h1 className="coming-soon">COMING SOON!</h1>
      </div>
      <TagInstagram />
      <div className="about-me-pic-container">
        <h2>About Gwen</h2>
        <img
          style={{ width: "189px", height: "189px" }}
          src="https://can-gwen-cook.s3-us-west-1.amazonaws.com/cgc-about-me.png"
          alt="about-me-pic"
        />
        <p>
          Hi, my name is Gwen welcome to my collection of healthy and tasty
          recipes!{" "}
          <Link style={{ textDecoration: "underline" }} to="/about">
            read more
          </Link>
        </p>
      </div>
      <hr className="divider"></hr>
      <div style={{ paddingTop: "20px" }}>
        <h2>Latest Recipes</h2>
        <RecipeCarousel recipes={topThree} />
      </div>
    </div>
  );
};

export default Blog;
