import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  city: '',
  latitude: '',
  longitude: ''
}

export const currentCitySlice = createSlice({
  name: 'currentCity',
  initialState,
  reducers: {
    setCurrentCity: (state, { payload }) => {
      state.city = payload.currentCity
      state.latitude = payload.latitude
      state.longitude = payload.longitude
    },
  }
})

/** Actions */
export const { setCurrentCity } = currentCitySlice.actions

/** Selectors */
export const selectCurrentCity = createSelector(
  state => state.currentCity,
  currentCity => currentCity
)

/** Reducers export */
export default currentCitySlice.reducer
