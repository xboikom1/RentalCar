import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import brandsReducer from "./brands/slice";
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";
import favouritesReducer from "./favourites/slice";

const persistConfig = {
  key: "favourite-cars",
  storage,
  whitelist: ["favourites"],
};

const rootReducer = combineReducers({
  brands: brandsReducer,
  cars: carsReducer,
  filters: filtersReducer,
  favourites: favouritesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

export const persistor = persistStore(store);
