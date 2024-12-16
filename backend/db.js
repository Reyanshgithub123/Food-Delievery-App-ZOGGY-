const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/yoo";

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");

        // Access the database
        const db = mongoose.connection.db;

        // Access the 'Food' collection
        const fetched_data = db.collection("food_item");

        // Fetch data using async/await
        const data = await fetched_data.find({}).toArray();

        // Log the data
        console.log("hello");

    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    }
};

module.exports = mongoDB;

