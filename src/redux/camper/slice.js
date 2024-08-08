import { createSlice } from "@reduxjs/toolkit";
import { currentCamp, getAllCamp } from "./operations";

const slice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    currentItem: {},
    loading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getAllCamp.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllCamp.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(getAllCamp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(currentCamp.pending, (state) => {
        state.loading = true;
      })
      .addCase(currentCamp.fulfilled, (state, action) => {
        state.loading = false;
        state.currentItem = action.payload;
      })
      .addCase(currentCamp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      }),
});

export default slice.reducer;
