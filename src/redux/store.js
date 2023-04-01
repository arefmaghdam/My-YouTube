import { configureStore } from "@reduxjs/toolkit";

import optionMenuStatusReducer from "./optionMenuStatusSlice";

const store = configureStore({
  reducer: {
    optionMenuStatus: optionMenuStatusReducer,
  },
});

export default store;
