import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentCity: '',
}

export const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    setCurrentCity: (state, { payload }) => {
      state.currentCity = payload
    },
  }
})

/** Actions */
export const { setCurrentCity } = currentCitySlice.actions

/** Selectors */
export const selectCurrentCity = (state) => state.currentCity.currentCity

/** Reducers export */
export default currentCitySlice.reducer
