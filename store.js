import { configureStore } from "@reduxjs/toolkit";
import basketReducer from './slices/basketSlice'
import restaurantReducer from './slices/restaurantSlice'
import restaurantsReducer from './slices/restaurantsSlice'
import currentCitySlice from "./slices/currentCitySlice";
import currentUserSlice from "./slices/userSlice";
import thunkMiddleware from 'redux-thunk';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
    restaurants: restaurantsReducer,
    currentCity: currentCitySlice,
    currentUser: currentUserSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
})
