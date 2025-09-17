import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operations";

const slice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    page: 1,
    totalPages: 0,
    carById: null,
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
        state.error = null;

        if (action.payload.isAppend)
          state.cars = [...state.cars, ...action.payload.cars];
        else state.cars = action.payload.cars;
        console.log("Updated cars state:", state.page);
      })
      .addCase(fetchCars.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to fetch cars";
      })
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.carById = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCarById.rejected, (state) => {
        state.isLoading = false;
        state.error = "Failed to fetch car details";
      });
  },
});

export default slice.reducer;
