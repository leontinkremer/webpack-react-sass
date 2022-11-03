import React from "react";
import { Route, Switch, Redirect } from "react-router";
import JobTimePageMain from "../../jobtimeComponents/JobTimePageMain";
import JobTimePageLogin from "../../jobtimeComponents/JobTimePageLogin";
import JobTimePageProjects from "../../jobtimeComponents/JobTimePageProjects";
import JobTimePageDashboard from "../../jobtimeComponents/JobTimePageDashboard";
import JobTimePageSettings from "../../jobtimeComponents/JobTimePageSettings";
import JobTimePageTimer from "../../jobtimeComponents/JobTimePageTimer";

import styles from "./_Jobtime.module.scss";

const Jobtime = () => {
  return (
    <div className={styles.App}>
      <Switch>
        <Route exact path="/" component={JobTimePageMain} />
        <Route exact path="/login" component={JobTimePageLogin} />
        <Route exact path="/projects" component={JobTimePageProjects} />
        <Route exact path="/dashboard" component={JobTimePageDashboard} />
        <Route exact path="/settings" component={JobTimePageSettings} />
        <Route exact path="/timer" component={JobTimePageTimer} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default Jobtime;
