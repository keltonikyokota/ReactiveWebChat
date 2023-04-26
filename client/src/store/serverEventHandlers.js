import { addMessage } from "./messagesReducer/messagesSlice";
import { addUser, clearUsers } from "./usersReducer/usersSlice";
import { clearMessages } from "./messagesReducer/messagesSlice";
import {removeUser} from "./usersReducer/usersSlice";
import { logout } from "./authReducer/authSlice";
import { initError } from "./webSocketErrorReducer/webSocketErrorSlice";

const createMessageHandler = (dispatch) => (e) => {
    const data = JSON.parse(e.data);
    const serverEventType = data?.serverEvent?.type || "message";
    switch (serverEventType) {
        case "deleteUser":
            dispatch(removeUser(data.serverEvent.payload.id));
            dispatch(addMessage(data));
            break;

        case "newUser":
            dispatch(addUser(data.serverEvent.payload));
            dispatch(addMessage(data));
            break;

        case "message": 
            dispatch(addMessage(data));
            break;
        
        case "userList":
            data.serverEvent.payload.forEach(user => dispatch(addUser(user)))
            break;

        default:
            break;
    }
}

const createCloseHandler = (dispatch) => () => {
    dispatch(logout());
    dispatch(clearMessages());
    dispatch(clearUsers());
    dispatch(initError("Internal server error"));
}

const createErrorHandler = (dispatch) => (e) => {
    dispatch(logout());
    dispatch(initError("Unable to reach the server"));
}

export {
    createMessageHandler,
    createCloseHandler,
    createErrorHandler
}