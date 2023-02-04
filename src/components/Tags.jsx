import React from "react";
import "../style/Tags.css";

const Tags = ({ tags }) => {
  return (
    <div className="tags">
      {tags?.map((tag, index) => (
        <span className="tag" key={index}>
          {tag}
        </span>
      ))}
    </div>
  );
};

export default Tags;