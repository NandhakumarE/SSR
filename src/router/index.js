import React from "react";
import { Route, Routes } from "react-router";
import Home from "../client/components/Home";

export default () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/about" element={(<div>About</div>)} />
    </Routes>
  );
};
