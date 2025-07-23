import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Giả lập API thêm sản phẩm
export const addProductAsync = createAsyncThunk(
  'products/addProductAsync',
  async (product) => {
    return new Promise(resolve => {
      setTimeout(() => resolve(product), 1000);
    });
  }
);

const initialState = {
  products: [
    {
      id: '123456',
      name: 'Example Product',
      price: 9.99,
      description: 'This is an example product.',
      catalogs: ['catalog1', 'catalog2'],
    },
  ],
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addProductAsync.fulfilled, (state, action) => {
      state.products.push(action.payload);
    });
  },
});

export default productSlice.reducer;
