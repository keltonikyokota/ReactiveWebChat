import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    error: ""
}

const webSocketErrorSlice = createSlice({
    name: "webSocketErrorReducer",
    initialState,
    reducers: {
        initError(state, action) {
                state.error = action.payload;
        }
    }
});

export default webSocketErrorSlice.reducer;
export const {initError} = webSocketErrorSlice.actions;