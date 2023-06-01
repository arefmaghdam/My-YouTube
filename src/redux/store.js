import { configureStore } from "@reduxjs/toolkit";

import optionMenuStatusReducer from "./optionMenuStatusSlice";
import showVideoListReducer from "./showVideoListSlice";
import videoListVideoIdReducer from "./videListVideoId";

const store = configureStore({
  reducer: {
    optionMenuStatus: optionMenuStatusReducer,
    showVideoList: showVideoListReducer,
    videoListVideoId: videoListVideoIdReducer,
  },
});

export default store;
