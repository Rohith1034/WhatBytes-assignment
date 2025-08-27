import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addItem: (state, action) => {
      const existing = state.cart.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      Cookies.set("cart",JSON.stringify(state.cart),{ expires: 7 });
    },
    deleteItem: (state, action) => {
      state.cart = state.cart.filter(element => element.id !== action.payload);
      Cookies.set("cart",JSON.stringify(state.cart),{ expires: 7 });
    },
    updateQuantity: (state, action) => {
      const { id, amount } = action.payload;
      const item = state.cart.find(i => i.id === id);
      if (item) {
        item.quantity = Math.max(1, item.quantity + amount);
      }
    }
  }
});

export const { addItem, deleteItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
