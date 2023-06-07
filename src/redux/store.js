import { configureStore } from "@reduxjs/toolkit";
import optionMenuStatusReducer from "./optionMenuStatusSlice";
import showVideoListReducer from "./showVideoListSlice";
import videoListVideoIdReducer from "./videListVideoId";
import videoListDatasReducer from "./videoListDatas";

const store = configureStore({
  reducer: {
    optionMenuStatus: optionMenuStatusReducer,
    showVideoList: showVideoListReducer,
    videoListVideoId: videoListVideoIdReducer,
    videoListDatas: videoListDatasReducer,
  },
});

export default store;
