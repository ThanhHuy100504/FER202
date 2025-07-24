import { createSlice } from '@reduxjs/toolkit';
import productsData from '../data/products.json';

const productSlice = createSlice({
  name: 'products',
  initialState: productsData.products,
  reducers: {
    addProduct(state, action) {
      state.push({ id: Date.now().toString(), ...action.payload });
    },
    deleteProduct(state, action) {
      return state.filter(p => p.id !== action.payload);
    },
    updateProduct(state, action) {
      const index = state.findIndex(p => p.id === action.payload.id);
      if (index !== -1) state[index] = action.payload;
    },
  },
});

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;
export default productSlice.reducer;
