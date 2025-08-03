import React from "react";
import { hydrateRoot } from "react-dom/client";
import router from "../router";
import { BrowserRouter } from "react-router";

// Attaching event to the server rendered html in browser.
hydrateRoot(
  document.querySelector("#root"),
  <BrowserRouter>{router()}</BrowserRouter>
);
