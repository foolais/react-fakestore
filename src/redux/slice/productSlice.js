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

// get product dengan id yang dikirim payload dan return index dan data yang product yang sama
const getExistingProduct = (id, state) => {
  const existingProductIndex = state.data.findIndex((item) => item.id === id);
  const existingProduct = state.data[existingProductIndex];

  return { existingProductIndex, existingProduct };
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleProductCounter: (state, action) => {
      const { type, id } = action.payload;
      const { existingProductIndex, existingProduct } = getExistingProduct(
        id,
        state
      );

      if (existingProductIndex === -1) return;

      existingProduct.quantity += type === "ADD" ? 1 : -1;
    },
    resetProductCounter: (state, action) => {
      const id = action.payload;
      const { existingProduct } = getExistingProduct(id, state);

      console.log({ existingProduct });

      // reset quantity
      existingProduct.quantity = 1;
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

export const { handleProductCounter, resetProductCounter } =
  productSlice.actions;

export default productSlice.reducer;
