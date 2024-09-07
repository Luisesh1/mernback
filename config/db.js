const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const connectDB = async () => {
	try {
		const mongoURI = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DATABASE}?authSource=admin`;
		await mongoose.connect(mongoURI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB connected");
	} catch (err) {
		console.error(err.message);
		process.exit(1);
	}
};

const disconnectDB = async () => {
	try {
		await mongoose.disconnect();
		console.log("MongoDB disconnected");
	} catch (err) {
		console.error("Error disconnecting from MongoDB:", err.message);
	}
};

module.exports = { connectDB, disconnectDB };
