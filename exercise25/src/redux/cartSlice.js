import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    updateQuantity(state, action) {
      const { id, quantity } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) item.quantity = quantity;
    },
    deleteFromCart(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addOrUpdateToCart(state, action) {
      const { product, quantity } = action.payload;
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity = quantity;
      } else {
        state.items.push({ ...product, quantity });
      }
    },
  },
});

export const {
  addToCart,
  updateQuantity,
  deleteFromCart,
  addOrUpdateToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
