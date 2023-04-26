import { createSlice } from "@reduxjs/toolkit";

const initialState = [
];

const messagesSlice = createSlice({
    name: "messageReducer",
    initialState,
    reducers: {
        addMessage(state, action) {
            const date = new Date();
            state.unshift({
                id: date.getTime(),
                date: date.toISOString(),
                ...action.payload
            });
        },
        clearMessages(state) {
            return initialState;
        }
    }
});

export const {addMessage, clearMessages} = messagesSlice.actions;
export default messagesSlice.reducer;