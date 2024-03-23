import { createSlice } from "@reduxjs/toolkit";
import shoes from "../../assets/shoes";

const initialState = {
  data: [
    {
      id: 1,
      title: "Matcha Latte",
      price: 14,
      image: shoes,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
    },
    {
      id: 2,
      title: "Coffe Latte",
      price: 15,
      image: shoes,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
    },
    {
      id: 3,
      title: "Caramel Latte",
      price: 13,
      image: shoes,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
    },
    {
      id: 4,
      title: "Hazelnut Latte",
      price: 12,
      image: shoes,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
    },
    {
      id: 5,
      title: "Red Velvet",
      price: 14.5,
      image: shoes,
      quantity: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quam porro velit dolorum consequuntur voluptatum.",
    },
  ],
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

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
  // extraReducers: {},
});

export const selectAllProducts = (state) => state.product.data;

export const { handleProductCounter } = productSlice.actions;

export default productSlice.reducer;
