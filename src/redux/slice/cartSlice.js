import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    handleAddToCart: (state, action) => {
      const { id, quantity } = action.payload;

      const index = state.data.findIndex((item) => item.id === id); // cari index product dengan id yang sama di cart

      if (index !== -1) {
        // jika ada index lakukan update quantity
        state.data[index].quantity += quantity;
      } else {
        // jika tidak ada index masukan data baru ke cart
        state.data.push(action.payload);
      }

      // kondisional untuk text swal
      const text =
        index !== -1
          ? `Updated ${state.data[index].title} in cart`
          : `Added ${action.payload.title} to cart`;

      Swal.fire({
        icon: "success",
        title: "Success",
        text,
        timer: 1500,
        showConfirmButton: false,
      });
    },
    handleCartCounter: (state, action) => {
      const { type, id } = action.payload;
      const existingProductIndex = state.data.findIndex(
        (item) => item.id === id
      ); // cari index product dengan id yang sama di cart

      if (existingProductIndex === -1) return; // jika tidak ada index return

      const existingProduct = state.data[existingProductIndex]; //cari product dengan index tersebut

      existingProduct.quantity += type === "ADD" ? 1 : -1;
    },
    handleRemoveProduct: (state, action) => {
      const id = action.payload;

      // cari index product dengan id yang sama di cart
      const existingProductIndex = state.data.findIndex(
        (item) => item.id === id
      );
      state.data.splice(existingProductIndex, 1);
    },
  },
});

export const { handleAddToCart, handleCartCounter, handleRemoveProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
