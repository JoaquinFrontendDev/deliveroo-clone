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
    setGroupedAndUserLastOrder: (state, { payload }) => {
      const groupedBasketItems = payload.reduce((results, item) => {
        const found = results.find(basketItem => basketItem.id === item.id);
        if (found) {
          found.count += 1;
        } else {
          results.push({ ...item, count: 1 });
        }
        return results;
      }, []);

      state.currentUser.lastOrder = groupedBasketItems;
    }
  }
})

/** Actions */
export const { setCurrentUser, setIsEditing, setGroupedAndUserLastOrder } = currentUserSlice.actions

/** Selectors */
export const selectCurrentUser = createSelector(
  state => state.currentUser.currentUser,
  currentUser => currentUser
)

/** Reducers export */
export default currentUserSlice.reducer
