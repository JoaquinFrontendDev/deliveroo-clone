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
    long: null
  },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state, { payload }) => {
      state.restaurant = payload
    }
  }
})

/** Actions */
export const { setRestaurant } = restaurantSlice.actions

/** Selectors */
export const selectRestaurant = createSelector(
  state => state.restaurant.restaurant,
  restaurant => restaurant
)

/** Reducers export */
export default restaurantSlice.reducer
