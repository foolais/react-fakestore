import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice";
import productReducer from "./slice/productSlice";
import detailProductReducer from "./slice/detailProductSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    detailProduct: detailProductReducer,
  },
});

store.subscribe(() => console.log("store changes", store.getState()));
export default store;
