import React from "react";
import { hydrateRoot } from "react-dom/client";
import Router from "../router";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import createStore from "../helper/store";

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

const store = createStore(preloadedState);

// Attaching event to the server rendered html in browser.
hydrateRoot(
  document.querySelector("#root"),
  <Provider store={store}>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </Provider>
);
