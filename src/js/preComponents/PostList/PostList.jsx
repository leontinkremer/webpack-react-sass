import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./_PostList.scss";

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <p key={post.id}>
          {post.title} <Link to={`/posts/${post.id}`}>читать</Link>
        </p>
      ))}
    </>
  );
};

PostList.propTypes = {};

PostList.defaultProps = {};

export default PostList;
