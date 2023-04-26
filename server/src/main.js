const ws = require("ws");

const wss = new ws.Server({
	port: 5001
}, () => console.log("SERVER STARTED ON PORT 5001"));

wss.on("connection", (ws) => {
    console.log("New Connection");

    ws.on("close", (code, reason) => {
		if (!ws.user)
			return;
		console.log(ws?.user?.name, ": connection closed.");
		broadCastMessage(JSON.stringify({
			type: "message",
			text: `${ws.user.name} has left the chat.`,
			author: "server",
			isServer: true,
				serverEvent: {type: "deleteUser", payload: ws.user}
		}));
    })

	ws.on("message", (message) => {
		message = JSON.parse(message);
		console.log("New message: ", message);
		switch (message.type) {

			case "handShake":
				ws.user= {name: message.author, id: message.userID};
				broadCastMessage(JSON.stringify({
					type: "message",
					text: `${ws.user.name} is joined to the board!`,
					author: "server",
					isServer: true,
					serverEvent: {type: "newUser", payload: ws.user}
				}));
				break;

			case "message":
				broadCastMessage(JSON.stringify({
					type: "message",
					text: message.text,
					author: ws.user.name
				}));
				break;

			case "getUsers":
				let userList = [];
				wss.clients.forEach(client => userList.push(client.user));

				ws.send(JSON.stringify({
					type: "message",
					isServer: true,
					serverEvent: {
						type: "userList",
						payload: userList
					}
				}));
				break;
				
			default:
				break;
		}
	});
});

const broadCastMessage = (message, exception = null) => 
	wss.clients.forEach((client) =>
		client.username !== exception && client.send(message));
