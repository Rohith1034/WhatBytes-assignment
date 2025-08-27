import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("data/fetch", async (url) => {
  const res = await axios.get(url);
  return res.data;
});

// Slice
const productSlice = createSlice({
  name: "products",
  initialState: {
    data: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        state.error = "Failed to load products.";
      });
  },
});

export default productSlice.reducer;
