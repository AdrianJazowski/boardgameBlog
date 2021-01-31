/** @format */

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { routes } from "../routes";
import Home from "../views/Home";
import Login from "../views/Login";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path={routes.home} component={Home} /> */}
        <Route path={routes.login} component={Login} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
