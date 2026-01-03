import { createAsyncThunk, } from "@reduxjs/toolkit";

const fetchProducts=createAsyncThunk('products', async ()=>{
    const resp= await fetch('https://dummyjson.com/products')
    const jsonResp=await resp.json();
    return jsonResp.products
})

const intialState={
    items:[],
    status:undefined,
    error:null
}
const productsSlice=createSlice({
    name:'productsSlice',
    intialState,
    extraReducers:(bulider)=>{
        bulider.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.status='succeeded',
            state.items= action.items
        })
    }
})

export default productsSlice.reducer