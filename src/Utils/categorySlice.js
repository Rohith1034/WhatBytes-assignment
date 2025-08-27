import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
    name: "category",
    initialState: {
        category: "all",
        maxPrice: 3000
    },
    reducers: {
        updateCategory: (state,action) => {
            state.category = action.payload;
        },

        updateMaxPrice: (state,action) => {
            state.maxPrice = action.payload;
        }
    }
})

export const {updateCategory,updateMaxPrice} = categorySlice.actions;
export default categorySlice.reducer;