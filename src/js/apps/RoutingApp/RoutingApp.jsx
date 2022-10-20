import React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import Navbar from "../../preComponents/Navbar";
import Home from "../../preComponents/Home";
import About from "../../preComponents/About";
import Posts from "../../preComponents/Posts";
import Contacts from "../../preComponents/Contacts";
import NotFound from "../../preComponents/NotFound";

import styles from "./_RoutingApp.module.scss";

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
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/contacts" component={Contacts} />
        <Redirect from="/lk" to="/signin" />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default RoutingApp;
