import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favourites",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      if (state.items.includes(carId))
        state.items = state.items.filter((id) => id !== carId);
      else state.items.push(carId);
    },
    clearFavorites: (state) => {
      state.items = [];
    },
  },
});

export const { toggleFavorite, clearFavorites } = slice.actions;

export default slice.reducer;
