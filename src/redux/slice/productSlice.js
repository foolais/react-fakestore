import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASEURL;

const initialState = {
  data: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "product/fetchProducts",
  async () => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleProductCounter: (state, action) => {
      const { type, id } = action.payload;
      const existingProductIndex = state.data.findIndex(
        (item) => item.id === id
      );

      if (existingProductIndex === -1) return;

      const existingProduct = state.data[existingProductIndex];

      existingProduct.quantity += type === "ADD" ? 1 : -1;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        const data = action.payload.map((item) => {
          return {
            id: item.id,
            title: item.title,
            image: item.image,
            description: item.description,
            price: item.price,
            quantity: 1,
          };
        });

        state.data = data;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const getProductsData = (state) => state.product.data;
export const getProductsStatus = (state) => state.product.status;
export const getProductsError = (state) => state.product.error;

export const { handleProductCounter } = productSlice.actions;

export default productSlice.reducer;
