import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { UNSAFE_ErrorResponseImpl } from "react-router-dom";

export const fetchProducts=createAsyncThunk(
    "products/fetchproducts",
    async()=>{
        const response=await fetch("https://dummyjson.com/products");
        const data=await response.json();
        return data.products;
    }
);

const productSlice=createSlice({
     name:"products",
     initialState:{
        items:[],
        loading:false,
        error:null
     },
     reducers:{},
     extraReducers:(builders)=>{
        builders.addCase(fetchProducts.pending,(state)=>{
            state.loading=true;
        })
        builders.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false;
            state.items=action.payload;
        })
        builders.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false;
            state.error=action.error.message;
        })
     }
    


}
)

export default productSlice.reducer;