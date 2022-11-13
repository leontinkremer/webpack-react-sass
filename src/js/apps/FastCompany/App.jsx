// Built-in modules
import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Custom modules
import Users from "./layouts/users";
import Login from "../../preComponents/Login";
import Main from "./layouts/main";
import NavBar from "../../fastCompanyComponents/navBar";
import EditForm from "../../fastCompanyComponents/editForm";

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route path="/users/:userId?/edit" component={EditForm} />
        <Route path="/users/:userId?" component={Users} />
        <Route path="/login/:type?" component={Login} />
        <Route path="/" exact component={Main} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default App;
