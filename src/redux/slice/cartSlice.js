import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

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

      const text = existingProduct
        ? `Updated ${existingProduct.title} in cart`
        : `Added ${action.payload.title} to cart`;

      Swal.fire({
        icon: "success",
        title: "Success",
        text: text,
        timer: 1500,
        showConfirmButton: false,
      });
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
