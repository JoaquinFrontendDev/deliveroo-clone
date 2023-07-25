import { createSlice, createSelector } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    setCategories: (state, action) => {
      return action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;

// Selectors
export const selectCategories = state => state.categories;

// Memoized selector
export const selectCategoriesMemoized = createSelector(
  [selectCategories],
  categories => categories
);

export default categoriesSlice.reducer;
