const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("A user has been connected! User id: ", socket.id);

  socket.on("message", (message) => {
    console.log("Message received and sent!");
    io.emit("message", { message, id: socket.id });
  });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
