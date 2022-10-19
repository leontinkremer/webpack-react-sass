import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./_Post.scss";

const Post = ({ match, posts }) => {
  const postId = match.params.postId;

  // В хранилище записей id - число,
  // а значения в match.params всегда строки
  const getPost = (postId) => posts.find(({ id }) => String(id) === postId);
  const post = getPost(postId);

  // Выведем заголовок если есть запись и сообщение об ошибке если нет
  return <h1>{post ? post.title : `post with id: ${postId} is not found`}</h1>;
};

Post.propTypes = {};

Post.defaultProps = {};

export default Post;
