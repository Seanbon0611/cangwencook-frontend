import React, { useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import TagInstagram from "../../components/tag-ig/TagInstagram";
import RecipeCarousel from "../../components/recipe-carousel/RecipeCarousel";
import "./blog.styles.scss";
import { blogs } from "../../blogs";
import EggBlog from "../../blogs/egg-blog/EggBlog";

const Blog = ({ recipes, setCurrentPage }) => {
  const memoizedTrigger = useCallback(() => {
    setCurrentPage("6");
  }, [setCurrentPage]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    memoizedTrigger("6");
    return () => setCurrentPage("");
  }, [setCurrentPage, memoizedTrigger]);
  const topThree = recipes.slice(0, 3);
  return (
    <div className="blog-page-container">
      <h1 className="page-title">Blog</h1>
      <div className="blog-preview-container">
        {blogs.map((blog) => (
          <div className="blog-preview" key={blog.title}>
            <Link
              className="thumbnail-text"
              style={{ display: "flex" }}
              to={`/blog/${blog.path}`}
            >
              <img
                className="blog-thumbnail"
                src={blog.thumbnail}
                alt="egg blog"
              />
              <div>
                <h3 style={{ paddingLeft: "10px" }}>{blog.title}</h3>
                <p className="blog-preview-text">{blog.preview}</p>
                <span>...</span>
              </div>
            </Link>
          </div>
        ))}
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
      <div className="latest-recipes">
        <h2 className="top-recipes">Latest Recipes</h2>
        <RecipeCarousel recipes={topThree} />
      </div>
    </div>
  );
};

export default Blog;
