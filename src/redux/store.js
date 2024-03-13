import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

store.subscribe(() => console.log("store changes", store.getState()));
export default store;
