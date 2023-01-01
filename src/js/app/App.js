import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "../../scss/app.scss";
import LandingPage from "./components/pages/LandingPage/LandingPage";
import Navbar from "./components/common/Navbar";
import DashboardPage from "./components/pages/DashboardPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <BrowserRouter>
        <Navbar loggedIn={loggedIn} />
        <Switch>
          <Route path="/dashboard" component={DashboardPage} />
          <Route path="/timer" component={LandingPage} />
          <Route path="/entries" component={LandingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={RegisterPage} />
          <Route path="/" exact component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
