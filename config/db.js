const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI)
        .then(() => console.log("Connected to MongoDB"))
        .catch(err => console.log("MongoDB connection failed:", err));
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
