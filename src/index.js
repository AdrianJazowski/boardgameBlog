/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import Root from "./Root";
import Router from "./routing/Router";
import store from "./store";

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
