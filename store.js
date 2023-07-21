import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './slices/basketSlice'
import restaurantReducer from './slices/restaurantSlice'
import currentCitySlice from "./slices/currentCitySlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
    currentCity: currentCitySlice
  }
})
