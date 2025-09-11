import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const slice = createSlice({
  name: "brands",
  initialState: {
    items: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export default slice.reducer;
