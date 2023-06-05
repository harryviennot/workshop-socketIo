const express = require("express");
const http = require("http");
const cors = require("cors");
require("dotenv").config();

const Socket = require("./utils/socketIo");

(async () => {
  const app = express();
  app.use(cors());

  const server = http.createServer(app);
  Socket(server);

  server.listen(process.env.PORT || 3001, () => {
    console.log("listening on port 3001");
  });
})();
