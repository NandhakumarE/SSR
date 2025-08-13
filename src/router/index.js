import React from "react";
import { Route, Routes, useRoutes } from "react-router";
import Home from "../client/components/Home";
import Users from "../client/components/Users";

export const routes = [
  { path: "/", element: <Home />, index: true },
  { path: "/users", element: <Users />, loadData: Users.loadData },
];

const Router = () => useRoutes(routes);

export default Router;
