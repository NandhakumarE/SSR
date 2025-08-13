import express from "express";
import renderer from "./helper/renderer";
import { matchRoutes } from "react-router";
import { routes } from "./router";
import createStore, { reducers } from "./helper/store";
import { configureStore } from "@reduxjs/toolkit";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get(/.*/, (req, res) => {
  const store = createStore();
  const matches = matchRoutes(routes, req.path) || [];

  const promises = matches.map((data) => {
      const loadData = data?.route?.loadData;
      return loadData ? loadData(store) : null;
    })
    .filter(Boolean);
    
  Promise.all(promises)
    .then(() => {
      res.send(renderer(req, store));
    })
    .catch((err) => {
      console.error("Data loading error:", err);
      res.status(500).send("Server error");
    });

});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
