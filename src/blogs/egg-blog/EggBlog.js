import React from "react";
import { blogs } from "../../blogs";

const EggBlog = () => {
  return <div>{blogs[0].content}</div>;
};

export default EggBlog;
