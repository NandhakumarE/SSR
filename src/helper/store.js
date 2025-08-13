import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";

export const reducers = {
  user: userReducer,
};

export default function createStore() {
  return configureStore({
    reducer: reducers,
  });
}
