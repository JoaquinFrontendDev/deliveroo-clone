import { createSlice } from "@reduxjs/toolkit";

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
    }
  }
})

/** Actions */
export const { addToBasket, removeFromBasket } = basketSlice.actions

/** Selectors */
export const selectBasketItems = (state) => state.basket.items
export const selectBasketItemsWithId = (state, id) => state.basket.items.filter(item => item.id === id)
export const selectBasketTotal = (state) => state.basket.items.reduce((total, item) =>
  total += item.price, 0)

/** Reducers export */
export default basketSlice.reducer
