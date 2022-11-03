import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import FastCompany from "./apps/FastCompany/App";
import LeontinKremerApp from "./apps/LeontinKremerApp";
import Jobtime from "./apps/Jobtime";
import RoutingApp from "./apps/RoutingApp";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <FastCompany />
  </BrowserRouter>
);
