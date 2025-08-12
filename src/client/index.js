import React from "react";
import { hydrateRoot } from "react-dom/client";
import Router from "../router";
import { BrowserRouter } from "react-router";
import store from "../store";
import { Provider } from "react-redux";

// Attaching event to the server rendered html in browser.
hydrateRoot(
  document.querySelector("#root"),
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
