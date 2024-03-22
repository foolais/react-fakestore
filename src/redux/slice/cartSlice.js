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
    handleCartCounter: (state, action) => {
      const { type, id } = action.payload;

      // cari product dengan id yang sama di cart
      const existingProduct = state.data.find((item) => item.id === id);

      // Kondisi penambahan cart product berdasarkan type
      if (type === "ADD") {
        existingProduct.quantity += 1;
      } else if (type === "MIN") {
        existingProduct.quantity -= 1;
      } else {
        return;
      }
    },
    handleRemoveProduct: (state, action) => {
      const id = action.payload;

      const newCart = state.data.filter((item) => item.id !== id);
      state.data = newCart;
    },
  },
});

export const { handleAddToCart, handleCartCounter, handleRemoveProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
