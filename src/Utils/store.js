import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "./cartSlice";
import productSlice from "./productsSlice";
import categorySlice from "./categorySlice";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedCart = persistReducer(persistConfig, cartReducer);

const store = configureStore({
  reducer: {
    products: productSlice,
    category: categorySlice,
    cart: persistedCart,
  },
});

export const persistor = persistStore(store);
export default store;
