import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const slice = createSlice({
  name: "brands",
  initialState: {
    brands: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});

export default slice.reducer;
