import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  restaurant: {
    id: null,
    imageUrl: null,
    title: null,
    rating: null,
    genre: null,
    address: null,
    short_description: null,
    dishes: null,
    lat: null,
    long: null,
    delivery_time: null,
    isFavorite: false
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, { payload }) => {
      state.restaurant = payload
      state.restaurant.isFavorite = false
    },
    toggleFavorite: (state) => {
      state.restaurant.isFavorite = !state.restaurant.isFavorite;
    },
  }
})

/** Actions */
export const { setRestaurant, toggleFavorite } = restaurantSlice.actions

/** Selectors */
export const selectRestaurant = createSelector(
  state => state.restaurant.restaurant,
  restaurant => restaurant
)

/** Reducers export */
export default restaurantSlice.reducer
