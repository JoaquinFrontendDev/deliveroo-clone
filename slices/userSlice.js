import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  currentUser: {
    displayName: null,
    firstName: null,
    lastName: null,
    userFirstLetter: null,
    photoURL: null,
    email: null,
    lastOrder: [],
    isEditing: false
  },
}

export const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, { payload }) => {
      if (payload.displayName) {
        const names = payload.displayName.split(' ')
        const newFirstName = names.shift()
        const newLastName = names.join(' ')
        const newFirstLetter = newFirstName.charAt(0)

        // Comprueba si firstName o lastName han cambiado
        if (newFirstName !== state.currentUser.firstName || newLastName !== state.currentUser.lastName) {
          state.currentUser.displayName = `${ newFirstName } ${ newLastName }`
        }

        state.currentUser = {
          ...state.currentUser,
          ...payload,
          firstName: newFirstName,
          lastName: newLastName,
          userFirstLetter: newFirstLetter
        }
      }
    },
    setIsEditing: (state, { payload }) => {
      state.currentUser.isEditing = payload;
    },
    setUserLastOrder: (state, { payload }) => {
      state.currentUser.lastOrder = payload
    },
    setGroupedAndUserLastOrder: (state, { payload }) => {
      const groupedBasketItems = payload.reduce((results, item) => {
        if (results[item.id]) {
          results[item.id].count += 1;
        } else {
          results[item.id] = { ...item, count: 1 };
        }
        return results;
      }, {});

      state.currentUser.lastOrder = Object.values(groupedBasketItems);
    }
  }
})

/** Actions */
export const { setCurrentUser, setIsEditing, setUserLastOrder, setGroupedAndUserLastOrder } = currentUserSlice.actions

/** Selectors */
export const selectCurrentUser = createSelector(
  state => state.currentUser.currentUser,
  currentUser => currentUser
)

/** Reducers export */
export default currentUserSlice.reducer
