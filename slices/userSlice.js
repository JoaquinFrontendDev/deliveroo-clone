import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    displayName: null,
    firstName: null,
    lastName: null,
    userFirstLetter: null,
    photoURL: null,
    email: null,
    lastOrder: null
  },
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      if (payload.displayName) {
        const names = payload.displayName.split(' ')
        const firstName = names.shift()
        const lastName = names.join(' ')
        const userFirstLetter = firstName.charAt(0)

        state.currentUser = {
          ...payload,
          firstName,
          lastName,
          userFirstLetter
        }
      }
    },
  }
})

/** Actions */
export const { setCurrentUser } = currentUserSlice.actions

/** Selectors */
export const selectCurrentUser = (state) => state.currentUser.currentUser

/** Reducers export */
export default currentUserSlice.reducer
