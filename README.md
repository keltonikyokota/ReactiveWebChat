# React Web Chat
Real-time chat in your browser.

## Technolohy stack
Server side uses only WebSocket for NodeJS.

Client side is made on: React, React Router, Redux Tool Kit, Ant Design and WebSocket.

## How to use?
Server starts on 5001 port and handles connection on every available network interface of your machine.

Client side application use `localhost` by default for connection with server.
You can change this value in `client/src/config.js` if you want to try the application in local net.

First of all you need to start the server application:
```
cd server
npm install
npm run start
```

After that you can start web server for client side application.
You can just run it in dev mode:
```
cd client
npm install
npm run start
```

If you want to use production build create ready-to-host bundle:
```
cd client
npm run build
```
And host the bundle on your web server.
