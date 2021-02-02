import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./not-found.styles.scss";

const NotFound = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="not-found-container">
      <h1 className="not-found-text">404</h1>
      <h1 style={{ padding: "10px 0px" }}>
        Oops! The page you are looking for does not exist.
      </h1>
      <Link to="/">
        <h2 className="link-to-home">Take me home</h2>
      </Link>
    </div>
  );
};

export default NotFound;
