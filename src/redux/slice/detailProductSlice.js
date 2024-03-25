import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASEURL;

const initialState = {
  data: [],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// get single product from fakestore api
export const fetchSingleProduct = createAsyncThunk(
  "detailProduct/fetchSingleProduct",
  async (id) => {
    try {
      const response = await axios.get(`${BASE_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

const detailProductSlice = createSlice({
  name: "detailProduct",
  initialState,
  reducers: {
    handleResetStatus: (state) => {
      state.status = "idle";
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchSingleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchSingleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
      });
  },
});

export const getSingleProductData = (state) => state.detailProduct.data;
export const getSingleProductStatus = (state) => state.detailProduct.status;
export const getSingleProductError = (state) => state.detailProduct.error;

export const { handleResetStatus } = detailProductSlice.actions;

export default detailProductSlice.reducer;
