import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "camper",
  initialState: {
    items: [],
    currentItem: "",
    loading: false,
  },
  extraReducers: (builder) => builder.addCase(),
});

export default slice.reducer;
