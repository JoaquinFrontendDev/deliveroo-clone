import { createSlice, createSelector } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: {
    categories: [],
    featuredCategories: []
  },
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
    setFeaturedCategories: (state, action) => {
      state.featuredCategories = action.payload;
    }
  },
});

export const { setCategories, setFeaturedCategories } = categoriesSlice.actions;

// Selectors
export const selectCategories = state => state.categories.categories;
export const selectFeaturedCategories = state => state.categories.featuredCategories;

// Memoized selector
export const selectCategoriesMemoized = createSelector(
  [selectCategories],
  categories => categories
);

export default categoriesSlice.reducer;
