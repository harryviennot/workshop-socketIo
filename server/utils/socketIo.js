const socketIo = require("socket.io");

const Socket = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("new client connected");

    socket.on("disconnect", () => {
      console.log("client disconnected");
    });

    socket.on("JoinRoom", ({ myUsername, currentRoom }) => {});

    socket.on("sendMessage", ({ myUsername, message, currentRoom }) => {});

    // socket.on("sendToAll", ({ myUsername, message }) => {

    // });
  });
};

module.exports = Socket;
