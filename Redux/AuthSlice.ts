import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserModel from "../Models/UserModel";

function register(currentState:UserModel, action: PayloadAction<UserModel>): UserModel {
    const newState = action.payload;
    return newState;
}

function login(currentState: UserModel, action: PayloadAction<UserModel>):UserModel {
    const newState = action.payload;
    return newState;
}

function logout(currentState: UserModel, action: PayloadAction<void>):UserModel {
    return null;
}

const authSlice = createSlice({
    name: "auth",
    initialState: null,
    reducers: {register, login, logout}
});

export const authActions = authSlice.actions
export const authReducer = authSlice.reducer