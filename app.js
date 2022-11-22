const http = require("http");

const express = require("express");
const cors = require("cors");
// const port = process.env.PORT || 80;
const port = 8000;
const app = express();


app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors({
  origin: '*'
}));

const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: ["http://localhost:3000/chat"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Access-Control-Allow-Headers",  "x-access-token, Origin, Content-Type, Accept"],
    credentials: true
  }
})

io.on('connection', (socket) => {
  console.log('a user connected');
  console.log(socket.id)

  socket.on('chat message', (msg) => {
    console.log('message:'+ msg);
    io.emit('chat message', msg)

  })
})


app.use("/static", express.static("public"));

app.listen(port, () => console.log(`Server up and running on port ${port}.`));
server.listen(8001, () => {console.log(`Listening on port 8001`)})


require('./routes/form.routes') (app);
require('./routes/auth.routes') (app);
