import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./useCounter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;