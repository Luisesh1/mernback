const express = require("express");
const dotenv = require("dotenv");
const cors = require('cors');
const passport = require("passport");
const http = require('http');
const { connectDB } = require("./config/db");
const { initializeSocket } = require('./config/sockets');
const swaggerSetup = require('./config/swagger');
const app = express();
const server = http.createServer(app);
initializeSocket(server);
const errorHandler = require("./middlewares/errorHandler");
const eventRoutes = require("./routes/eventRoutes");
const userRoutes = require("./routes/userRoutes");

dotenv.config();
connectDB();

swaggerSetup(app); 

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use('/uploads', express.static('uploads'));
require("./config/passport")(passport);
app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);
app.use(errorHandler);



const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = { app };
