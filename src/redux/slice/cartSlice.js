import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    handleAddToCart: (state, action) => {
      // descturucture payload
      const { id, quantity } = action.payload;

      // Cari product dengan id yang sama di cart
      const existingProduct = state.data.find((item) => item.id === id);

      // jika ada produk yang sama lakukan penambahan quantity
      if (existingProduct) {
        existingProduct.quantity += quantity;
      } else {
        // jika tidak ada produk yang sama, tambahkan newProduct
        state.data.push(action.payload);
      }
    },
  },
});

export const { handleAddToCart } = cartSlice.actions;
export default cartSlice.reducer;
