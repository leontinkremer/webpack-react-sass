import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import qs from "query-string";

import PostList from "../PostList";
import Post from "../Post";
import PropTypes from "prop-types";
import "./_Posts.scss";

const Posts = ({ location }) => {
  const { postId } = useParams(); // Можно сразу получить postId
  // Логика получения записи перенесена из Post
  const getPost = (postId) => posts.find(({ id }) => String(id) === postId);

  const [showOffer, setShowOffer] = useState(false);

  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  const search = qs.parse(location.search);
  console.log("location", location);
  const { firstName, lastName } = search;
  console.log("search", search);
  console.log("firstName", firstName);

  useEffect(() => {
    if (!showOffer && firstName && lastName) {
      setShowOffer(true);
    }
  }, [firstName, lastName, showOffer]);

  // Если есть postId, то возвращаем Post, иначе PostList
  return (
    <>
      {showOffer && <div>{`Ваше имя ${firstName} ${lastName}`}</div>}

      {postId ? (
        <Post post={getPost(postId)} id={postId} />
      ) : (
        <PostList posts={posts} />
      )}
    </>
  );
};

Posts.propTypes = {};

Posts.defaultProps = {};

export default Posts;
