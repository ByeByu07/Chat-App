const express = require('express')();
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const CHAT_BOT = 'ChatBot';
let chatRoom = '';
const allUsers = [];

const server = http.createServer(express);

express.use(cors());
require('dotenv').config();

const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
    },
});

io.on('connection', (socket) => {
    socket.on('join_room', (data) => {
        const { username, room } = data;
        socket.join(room);

        const createdTime = Date.now();

        socket.to(room).emit('receive_message', {
            message: `${username} has joined the room chat`,
            username: CHAT_BOT,
            createdTime,
        });

        socket.emit('receive_message', {
            message: `Welcome ${username}`,
            username: CHAT_BOT,
            createdTime,
        });

        chatRoom = room;
        allUsers.push({ id: socket.id, username, room });
        const chatRoomUsers = allUsers.filter((user) => user.room === room);
        socket.to(room).emit('chatroom_users', chatRoomUsers);
        socket.emit('chatroom_users', chatRoomUsers);
    });

    socket.on('send-message', (data) => {
        io.emit(data);
        // console.log(data);
    });
});

express.get('/', (req, res) => res.send('halo'));

server.listen(process.env.SERVER_PORT, () => console.log(`Berjalan pada url http://localhost:${process.env.SERVER_PORT}`));