import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    userData: {
    }
}

const authSlice = createSlice({
    name: "authReducer",
    initialState,
    reducers: {
        login(state, action) {
            state.isAuth = true;
            state.userData.name = action.payload;
        },
        logout(state) {
            state.isAuth = false;
            state.userData = {}
        },
    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;