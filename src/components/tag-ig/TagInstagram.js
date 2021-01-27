import React from "react";
import { ReactComponent as InstaTag } from "../../assets/icons/ig-plug.svg";
import "./tag-ig.styles.scss";

const TagInstagram = () => {
  return (
    <div className="tag-container">
      <div>
        <InstaTag />
      </div>
      <div>
        <p>SHARE YOUR MOMENTS BY TAGGING</p>
        <p>@CANGWENCOOK SEE MORE PHOTOS</p>
      </div>
    </div>
  );
};

export default TagInstagram;
