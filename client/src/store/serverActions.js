import { createAction } from "@reduxjs/toolkit";

export const sendMessage = createAction("websocket/sendMessage");
export const loadUsers = createAction("websocket/loadUsers");