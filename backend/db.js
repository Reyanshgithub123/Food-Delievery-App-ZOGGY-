const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017/yoo";

const mongoDB = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");

        // Access the database
        const db = mongoose.connection.db;

        // Fetch data from 'food_item' collection
        const foodItems = await db.collection("food_item").find({}).toArray();

        // Fetch data from 'category' collection
        const foodCategories = await db.collection("category").find({}).toArray();

        // Set global variables
        global.food_items = foodItems;
        global.category = foodCategories;

        console.log("Data fetched and stored globally");
    } catch (error) {
        console.error("Error connecting to MongoDB or fetching data:", error);
    }
};

module.exports = mongoDB;
