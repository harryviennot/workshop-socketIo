const socketIo = require("socket.io");

const Socket = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("new client connected");

    socket.on("disconnect", () => {
      console.log("client disconnected");
    });

    socket.on("JoinRoom", ({ myUsername, currentRoom }) => {
      console.log("user joined room", myUsername, currentRoom);
      socket.join(currentRoom);
      socket.to(currentRoom).emit("receiveMessage", {
        message: `${myUsername} a rejoint la salle`,
        username: "Serveur",
      });
    });

    socket.on("sendMessage", ({ myUsername, message, currentRoom }) => {
      console.log("message received", message, currentRoom);
      io.to(currentRoom).emit("receiveMessage", {
        username: myUsername,
        message,
      });
    });

    socket.on("leaveRoom", ({ myUsername, room }) => {
      console.log("user left room", myUsername, room);
      socket.leave(room);
      socket.to(room).emit("receiveMessage", {
        message: `${myUsername} a quitté la salle`,
        username: "Serveur",
      });
    });
  });
};

module.exports = Socket;
