import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalItems: 0,
    cartTotal: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
      state.totalItems += item.quantity;
      state.cartTotal += item.price * item.quantity;
    },
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        const diff = quantity - item.quantity;
        item.quantity = quantity;
        state.totalItems += diff;
        state.cartTotal += item.price * diff;
      }
    },
    removeItem: (state, action) => {
      const id = action.payload;
      const item = state.items.find((i) => i.id === id);
      if (item) {
        state.totalItems -= item.quantity;
        state.cartTotal -= item.price * item.quantity;
        state.items = state.items.filter((i) => i.id !== id);
      }
    },
    setItems: (state, action) => {
      state.items = action.payload;
      state.totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
      state.cartTotal = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalItems = 0;
      state.cartTotal = 0;
    },

  },
});

export const { addItem, updateItemQuantity, removeItem, setItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
