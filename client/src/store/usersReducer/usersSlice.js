import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    entities: {}
}

const usersSlice = createSlice({
    name: "usersReducer",
    initialState,
    reducers: {
        addUser(state, action) {
            const user = {
                id: action.payload.id,
                name: action.payload.name
            }
            state.entities[user.id] = user;
        },
        removeUser(state, action) {
            delete state.entities[action.payload];
        },
        clearUsers(state) {
            state.entities = {};
        }
    }
});

export const {addUser, removeUser, clearUsers} = usersSlice.actions;
export default usersSlice.reducer;