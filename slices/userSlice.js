import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    displayName: null,
    email: null,
    photoUrl: null
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInState: (state, { payload }) => {
      state.user = payload
    }
  }
})

/** Actions */
export const { setUserInState } = userSlice.actions

/** Selectors */
export const selectUser = (state) => state.user.user

/** Reducers export */
export default userSlice.reducer
