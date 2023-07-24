import { createSelector, createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    byCategory: {},
    allRestaurants: [],
    favorites: [],
  },
  reducers: {
    setRestaurantsByCategory: (state, action) => {
      state.byCategory[action.payload.categoryId] = action.payload.restaurants;
    },
    setAllRestaurants: (state, action) => {
      state.allRestaurants = action.payload
    },
    toggleFavorite: (state, action) => {
      const restaurantId = action.payload;
      const restaurant = state.allRestaurants.find(r => r._id === restaurantId);
      if (!restaurant) return; // Si el restaurante no se encuentra en allRestaurants, no hacer nada

      const index = state.favorites.findIndex(fav => fav._id === restaurantId);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(restaurant);
      }
    }
  },
});

export const { setRestaurantsByCategory, setAllRestaurants, toggleFavorite } = restaurantsSlice.actions;

export const selectRestaurantsByCategory = (state, categoryId) =>
  state.restaurants.byCategory[categoryId];
export const selectAllRestaurants = (state) => state.restaurants.allRestaurants
export const selectIsFavorite = createSelector(
  state => state.restaurants.favorites,
  (state, id) => id,
  (favorites, id) => favorites.some(restaurant => restaurant._id === id),
);
export const selectFavoriteRestaurants = (state) => state.restaurants.favorites;


export default restaurantsSlice.reducer;
