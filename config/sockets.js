const { Server } = require('socket.io');
const Event = require('../models/Event');
const Category = require('../models/Category');
let io;
const initializeSocket = (server) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

  io.on('connection', async (socket) => {
    console.log('A user connected');
    const totalEvents = await Event.countDocuments();
    const totalCategories = await Category.countDocuments();
    socket.emit('updateCounts', { totalEvents, totalCategories });
    socket.on('requestData', () => {
        socket.emit('updateCounts', { totalEvents, totalCategories });
    });
    socket.on('disconnect', () => {
      console.log('A user disconnected');
    });
  });
};

const getIO = () => {
  if (!io) {
    throw new Error('Socket.io not initialized!');
  }
  return io;
};

module.exports = { initializeSocket, getIO };
