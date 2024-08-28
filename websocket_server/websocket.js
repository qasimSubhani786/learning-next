const { data } = require("autoprefixer");
const { createServer } = require("http");
const { Server } = require("socket.io");

const httpsServer = createServer();
const io = new Server(httpsServer, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
});

io.on("connection", async (socket) => {
  console.log(
    "Getting Message From Server ---> Client is connected ",
    socket.id
  );
  socket.on("message", (data) => {
    console.log("data -->", data);
    io.emit("message", "Hellow Client");
  });
});

httpsServer.listen(3000, () => {
  console.log("Server is Listening on port 3000");
});
