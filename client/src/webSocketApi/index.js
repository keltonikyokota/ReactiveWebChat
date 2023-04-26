import { WEB_SOCKET_SERVER_IP } from "../config";

let webSocket = new WebSocket(`ws://${WEB_SOCKET_SERVER_IP}:5001`);

export function socketAddListener(type, callback) {
    webSocket.addEventListener(type, callback);
}

export function socketSendMessage(payload) {
    webSocket.send(JSON.stringify(payload));
};
