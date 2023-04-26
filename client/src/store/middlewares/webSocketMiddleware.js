// This middleware intercepts actions 
// which should works with websocket,
// but shouldn't works with state.
// For more comfortable usage with React.

import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { loadUsers, sendMessage } from "../serverActions";
import { login, logout } from "../authReducer/authSlice";
import { socketSendMessage } from "../../webSocketApi";

const webSocketMiddleware = createListenerMiddleware();
webSocketMiddleware.startListening({
    matcher: isAnyOf(sendMessage, loadUsers, login, logout),
    effect: (action) => {
        switch (action.type) {
            case login.type:
                socketSendMessage({type: "handShake", userID: Date.now(), author: action.payload});
                break;
            case sendMessage.type:
                socketSendMessage({type: "message", text: action.payload});
                break;
            case loadUsers.type:
                socketSendMessage({type: "getUsers"});
                break;
            default: 
                break;
        }
    }
});

export default webSocketMiddleware;