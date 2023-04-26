import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpened: window.innerWidth > 500
}

const sideBarSlice = createSlice({
    name: "sideBarReducer",
    initialState,
    reducers: {
        toggleSidebar(state) {
            state.isOpened = !state.isOpened;
        }
    }
});

export default sideBarSlice.reducer;
export const { toggleSidebar } = sideBarSlice.actions;