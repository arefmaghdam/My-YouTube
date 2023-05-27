import { configureStore } from "@reduxjs/toolkit";

import optionMenuStatusReducer from "./optionMenuStatusSlice";
import showVideoListReducer from "./showVideoListSlice";

const store = configureStore({
  reducer: {
    optionMenuStatus: optionMenuStatusReducer,
    showVideoList: showVideoListReducer,
  },
});

export default store;
