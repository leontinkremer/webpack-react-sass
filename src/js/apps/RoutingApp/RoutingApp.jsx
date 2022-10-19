import React from "react";

import { Route, Switch } from "react-router-dom";
import Navbar from "../../preComponents/Navbar";
import Home from "../../preComponents/Home";
import SignIn from "../../preComponents/SignIn";
import Posts from "../../preComponents/Posts";
import Contacts from "../../preComponents/Contacts";

import styles from "./_RoutingApp.module.scss";
import Post from "../../preComponents/Post";
import PostList from "../../preComponents/PostList";

const posts = [
  { id: 1, title: "Post 1" },
  { id: 2, title: "Post 2" },
  { id: 3, title: "Post 3" },
];

const RoutingApp = () => {
  return (
    <>
      <Navbar />
      <br />
      <h1>Routing-App</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={SignIn} />
        <Route path="/posts/:postId" component={Posts}>
          {(props) => <Post {...props} posts={posts} />}
        </Route>
        <Route path="/posts" component={Posts}>
          {(props) => <PostList {...props} posts={posts} />}
        </Route>
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </>
  );
};

export default RoutingApp;
