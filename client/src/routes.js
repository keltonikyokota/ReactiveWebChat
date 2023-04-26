import LoginPage from "./pages/LoginPage";
import ChatPage from "./pages/ChatPage";
import { Navigate } from "react-router";

export const LOGIN_PATH = "/login"
export const CHAT_PATH = "/"

export const publicRoutes = [
    {
        path: LOGIN_PATH,
        element: <LoginPage />
    },
    // Default route for unauthorized users
    {
        path: "*",
        element: <Navigate to={LOGIN_PATH} replace />
    }
]

export const privateRoutes = [
    {
        path: CHAT_PATH,
        element: <ChatPage />
    },
    // Default route for authorized users
    {
        path: "*",
        element: <Navigate to={CHAT_PATH} replace />
    }
]