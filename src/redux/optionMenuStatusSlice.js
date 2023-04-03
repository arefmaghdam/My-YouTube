import { createSlice } from "@reduxjs/toolkit";

const optionMenuStatusInitialState = {
  value: 0,
};

const optionMenuStatusSlice = createSlice({
  name: "optionMenuStatus",
  initialState: optionMenuStatusInitialState,
  reducers: {
    increament(state) {
      state.value += 1;
    },
  },
});

export const { increament } = optionMenuStatusSlice.actions;
export default optionMenuStatusSlice.reducer;
