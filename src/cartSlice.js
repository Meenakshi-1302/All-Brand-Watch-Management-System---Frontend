import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
        const item = action.payload;
      const existingItem = state.items.find(i => i.watch_id === item.watch_id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeFromCart: (state, action) => {
        state.items = state.items.filter(item => item.watch_id !== action.payload.watch_id);
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find(i => i.watch_id === action.payload.watch_id);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find(i => i.watch_id === action.payload.watch_id);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
