import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    add: (state) => {
      state.count += 1;
    },
    sub: (state) => {
      state.count -= 1;
    },
    addByNum: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { add, sub, addByNum } = counterSlice.actions;

export default counterSlice.reducer;