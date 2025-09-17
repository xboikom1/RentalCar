import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
axios.defaults.baseURL = "https://car-rental-api.goit.global";

export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async ({ page = 1, filters = {} }, { thunkAPI }) => {
    try {
      const params = new URLSearchParams();

      if (filters.brand) params.append("brand", filters.brand);

      if (filters.rentalPrice)
        params.append("rentalPrice", filters.rentalPrice);

      if (filters.minMileage && filters.minMileage > 0)
        params.append("minMileage", filters.minMileage.toString());

      if (filters.maxMileage && filters.maxMileage > 0)
        params.append("maxMileage", filters.maxMileage.toString());

      if (page) params.append("page", page.toString());

      const queryString = params.toString();
      const url = queryString ? `/cars?${queryString}` : "/cars";

      const response = await axios.get(url);

      return {
        cars: response.data.cars,
        totalPages: response.data.totalPages,
        page: response.data.page,
        isAppend: page > 1,
      };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "/cars/fetchCarById",
  async (carId, thunkAPI) => {
    try {
      const response = await axios.get(`/cars/${carId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
