/** @format */

import React from "react";
import { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navbar from "../componenets/navbar/Navbar";
import GlobalStyles from "../globalStyles/GlobalStyles";
import { mainTheme } from "../globalStyles/mainTheme";
import Root from "../Root";
import { routes } from "../routes";
import Login from "../views/Login";
import SinglePost from "../views/singlePost/SinglePost";

const Router = () => {
  const [theme, setTheme] = useState(mainTheme);
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Navbar />
        <Switch>
          <Route exact path={routes.home} component={Root} />
          <Route path={routes.login} component={Login} />
          <Route path={routes.singlePost} component={SinglePost} />
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Router;
