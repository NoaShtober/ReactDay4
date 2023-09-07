import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import EmployeeModel from "../Models/EmployeeModel";


function setAll(currentState: EmployeeModel[], action: PayloadAction<EmployeeModel[]>) : EmployeeModel[] {
    const newState = action.payload;
    return newState;
}

const employeesSlice = createSlice({
    name: "products", //Slice name
    initialState: [],
    reducers: {setAll}
})
//Export all actions (each reducer will create its own action)
export const employeesActions = employeesSlice.actions;

//Export reducer:
export const employeesReducer = employeesSlice.reducer;
