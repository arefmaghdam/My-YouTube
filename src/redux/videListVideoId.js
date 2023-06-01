import { createSlice } from "@reduxjs/toolkit";

const videoListVideoIdInitialState = {
  value: "",
};

const videoListVideoIdSlice = createSlice({
  name: "videoListVideoId",
  initialState: videoListVideoIdInitialState,
  reducers: {
    videoListVideoId(state, action) {
      state.value = action.payload;
    },
  },
});

export const { videoListVideoId } = videoListVideoIdSlice.actions;
export default videoListVideoIdSlice.reducer;
