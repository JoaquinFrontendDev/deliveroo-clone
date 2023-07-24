import { createSelector, createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const dishId = action.payload;
      if (!state.includes(dishId)) {
        state.push(dishId);
      }
    },
    removeFavorite: (state, action) => {
      const dishId = action.payload;
      return state.filter((id) => id !== dishId);
    },
  },
});

/** Actions */
export const { addFavorite, removeFavorite } = favoritesSlice.actions;

/** Selectors */
export const selectFavorites = createSelector(
  state => state.favorites,
  favorites => favorites
)

/** Reducers export */
export default favoritesSlice.reducer;

