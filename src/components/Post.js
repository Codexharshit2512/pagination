import React from "react";

const Post = ({ post }) => {
  return (
    <div style={{ width: "300px", background: "red", color: "white" }}>
      <p>{post.id}</p>
      <div>{post.title}</div>
    </div>
  );
};

export default Post;
