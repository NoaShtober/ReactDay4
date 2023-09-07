import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";

//Reducers:

function setAll(currentState: ProductModel[], action: PayloadAction<ProductModel[]>) : ProductModel[] {
    const newState = action.payload;
    return newState;
}

function addOne(currentState: ProductModel[], action: PayloadAction<ProductModel>) : ProductModel[] {
    const newState = [...currentState];
    newState.push(action.payload);
    return newState;
}

function updateOne(currentState: ProductModel[], action: PayloadAction<ProductModel>) : ProductModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id ===action.payload.id);
    if(index >= 0) newState[index] = action.payload
    currentState.push(action.payload);
    return newState; // Will replace the current state with this one at the global state. 
}

function deleteOne(currentState: ProductModel[], action: PayloadAction<number>) : ProductModel[] {
    const newState = [...currentState];
    const index = newState.findIndex(p => p.id ===action.payload);
    if(index >= 0) newState.splice(index, 1); 
    return newState;
}

const productsSlice = createSlice({
    name: "products", //Slice name
    initialState: [],
    reducers: {setAll, addOne, updateOne, deleteOne}
})

//Export all actions (each reducer will create its own action)
export const productActions = productsSlice.actions;

//Export reducer:
export const productReducer = productsSlice.reducer;