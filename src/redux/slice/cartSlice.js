import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

// get cart dengan id yang dikirim payload dan return index dan data yang cart yang sama
const getExistingCart = (id, state) => {
  const existingCartIndex = state.data.findIndex((item) => item.id === id);
  const existingCart = state.data[existingCartIndex];

  return { existingCartIndex, existingCart };
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    data: [],
  },
  reducers: {
    handleAddToCart: (state, action) => {
      const { id, quantity } = action.payload;
      const { existingCartIndex, existingCart } = getExistingCart(id, state);

      if (existingCartIndex !== -1) {
        // jika ada index lakukan update quantity
        existingCart.quantity += quantity;
      } else {
        // jika tidak ada index masukan data baru ke cart
        state.data.push(action.payload);
      }

      // kondisional untuk text swal
      const text =
        existingCartIndex !== -1
          ? `Updated ${existingCart.title} in cart`
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
      const { existingCartIndex, existingCart } = getExistingCart(id, state);

      if (existingCartIndex === -1) return; // jika tidak ada index return

      existingCart.quantity += type === "ADD" ? 1 : -1;
    },
    handleRemoveProduct: (state, action) => {
      const id = action.payload;
      const { existingCartIndex } = getExistingCart(id, state);

      state.data.splice(existingCartIndex, 1);
    },
  },
});

export const { handleAddToCart, handleCartCounter, handleRemoveProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
