const path = require('path');
const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const app = express();
const port = process.env.PORT || 3000;
const server = http.createServer(app);
const io = socketIO(server);
const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('User connected');

    socket.on('disconnect',() => {
       console.log('disconnect');
    });
});


server.listen(port, () => {
    console.log(`Started up at port ${port}`);
});

module.exports = {app};