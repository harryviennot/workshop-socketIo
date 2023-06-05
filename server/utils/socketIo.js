const socketIo = require("socket.io");

const SocketIo = (server) => {
  const io = socketIo(server);

  io.on("connection", (socket) => {
    console.log("new client connected");

    socket.on("disconnect", () => {
      console.log("client disconnected");
    });
  });
};

module.exports = SocketIo;
