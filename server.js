const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('ice-candidate', (candidate) => {
    // Broadcast the ICE candidate to all other connected participants
    console.log("hello")
    socket.broadcast.emit('ice-candidate', candidate);
  });

  // Handle other signaling events, like offer, answer, etc.

  socket.on('disconnect', () => {
    console.log('User disconnected');
    // Clean up resources related to the disconnected user
  });
});

const port = 3001; // Port number to listen on
server.listen(port, () => {
  console.log(`Signaling server listening on port ${port}`);
});