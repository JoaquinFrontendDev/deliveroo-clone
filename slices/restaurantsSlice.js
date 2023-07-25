import { createSelector, createSlice } from '@reduxjs/toolkit';

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState: {
    featuredRestaurants: {},
    allRestaurants: [],
    favorites: [],
  },
  reducers: {
    setFeaturedRestaurants: (state, action) => {
      state.featuredRestaurants[action.payload.featuredId] = action.payload.restaurants;
    },
    setAllRestaurants: (state, action) => {
      state.allRestaurants = action.payload
    },
    toggleFavorite: (state, action) => {
      const restaurantId = action.payload;
      const restaurant = state.allRestaurants.find(r => r._id === restaurantId);
      if (!restaurant) return;

      const index = state.favorites.findIndex(fav => fav._id === restaurantId);
      if (index !== -1) {
        state.favorites.splice(index, 1);
      } else {
        state.favorites.push(restaurant);
      }
    }
  },
});

export const { setFeaturedRestaurants, setAllRestaurants, toggleFavorite } = restaurantsSlice.actions;

export const selectFeaturedRestaurants = (state, featuredId) =>
  state.restaurants.featuredRestaurants[featuredId];
export const selectAllRestaurants = (state) => state.restaurants.allRestaurants
export const selectIsFavorite = createSelector(
  state => state.restaurants.favorites,
  (state, id) => id,
  (favorites, id) => favorites.some(restaurant => restaurant._id === id),
);
export const selectRestaurantByCategory = createSelector(
  state => state.restaurants.allRestaurants,
  (state, name) => name,
  (allRestaurants, name) => allRestaurants.filter(restaurant => restaurant.type?.name === name),
);
export const selectFavoriteRestaurants = (state) => state.restaurants.favorites;


export default restaurantsSlice.reducer;
