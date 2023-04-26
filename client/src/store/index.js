import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authReducer/authSlice";
import usersReducer from "./usersReducer/usersSlice";
import sideBarReducer from "./sideBarReducer/sideBarSlice"
import webSocketErrorReducer from "./webSocketErrorReducer/webSocketErrorSlice";
import messagesReducer from "./messagesReducer/messagesSlice";
import webSocketMiddleware from "./middlewares/webSocketMiddleware";
import { socketAddListener } from "../webSocketApi";
import { createCloseHandler, createErrorHandler, createMessageHandler } from "./serverEventHandlers";

const rootReducer = combineReducers({
    authReducer,
    usersReducer,
    messagesReducer,
    sideBarReducer,
    webSocketErrorReducer
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().prepend(webSocketMiddleware.middleware)
});

// Configuring message handling from WebSocket
socketAddListener("message", createMessageHandler(store.dispatch));
socketAddListener("close", createCloseHandler(store.dispatch));
socketAddListener("error", createErrorHandler(store.dispatch));

export default store;