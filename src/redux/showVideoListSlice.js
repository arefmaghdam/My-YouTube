import { createSlice } from "@reduxjs/toolkit";

const showVideoListInitialState = {
  value: true,
};

const showVideoListSlice = createSlice({
  name: "showVideoList",
  initialState: showVideoListInitialState,
  reducers: {
    videoListState(state, action) {
      state.value = action.payload;
    },
  },
});

export const { videoListState } = showVideoListSlice.actions;
export default showVideoListSlice.reducer;
