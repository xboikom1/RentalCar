import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    rentalPrice: "",
    minMileage: 0,
    maxMileage: 0,
  },
  reducers: {
    setFilters(state, action) {
      const { brand, rentalPrice, minMileage, maxMileage } = action.payload;
      state.brand = brand;
      state.rentalPrice = rentalPrice;
      state.minMileage = minMileage;
      state.maxMileage = maxMileage;
    },
    resetFilters(state) {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = 0;
      state.maxMileage = 0;
    },
  },
});

export const { setFilters, resetFilters } = slice.actions;

export default slice.reducer;
