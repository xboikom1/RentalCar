import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filters",
  initialState: {
    brand: "",
    rentalPrice: "",
    minMileage: 0,
    maxMileage: 0,
    loading: false,
    error: null,
  },
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setRentalPrice(state, action) {
      state.rentalPrice = action.payload;
    },
    setMinMileage(state, action) {
      state.minMileage = action.payload;
    },
    setMaxMileage(state, action) {
      state.maxMileage = action.payload;
    },
    resetFilters(state) {
      state.brand = "";
      state.rentalPrice = "";
      state.minMileage = 0;
      state.maxMileage = 0;
      state.loading = false;
      state.error = null;
    },
  },
});

export const {
  setBrand,
  setRentalPrice,
  setMinMileage,
  setMaxMileage,
  resetFilters,
} = slice.actions;

export default slice.reducer;
