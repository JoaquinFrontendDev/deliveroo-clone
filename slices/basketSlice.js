import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, { payload }) => {
      state.items = [...state.items, payload]
    },
    removeFromBasket: (state, { payload }) => {
      const index = state.items.findIndex((item) => item.id === payload.id)
      let newBasket = [...state.items]

      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product (id: ${ paylod.id }) as it's not in the basket)`
        )
      }

      state.items = newBasket
    },
    setBasketEmpty: (state) => {
      state.items = []
    }
  }
})

/** Actions */
export const { addToBasket, removeFromBasket, setBasketEmpty } = basketSlice.actions

/** Selectors */
export const selectBasketItemsWithId = createSelector(
  (state) => state.basket.items,
  (_, id) => id,
  (items, id) => items.filter(item => item.id === id)
)

export const selectBasketItems = createSelector(
  state => state.basket.items,
  items => items
)

export const selectBasketTotal = (state) =>
  state.basket.items.flat().reduce((total, item) => total + item.price * (item.count || 1), 0);

/** Reducers export */
export default basketSlice.reducer
