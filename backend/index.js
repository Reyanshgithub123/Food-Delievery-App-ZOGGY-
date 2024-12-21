const express = require("express");
const cors = require("cors");
const connectDB = require("./db"); // MongoDB connection
const userRoutes = require("./routes/user.route"); // Routes file

const app = express(); 
const PORT = 5000;

// Connect to MongoDB
connectDB();
 
// Middleware 
app.use(cors()); 
app.use(express.json()); // Parse JSON payloads 
 
// Routes
app.use("/api", userRoutes); // All routes will be prefixed with '/api'
app.use("/api", require("./routes/DisplayData")); // All routes will be prefixed with '/api'
app.use("/api", require("./routes/OrderData"))
app.use("/api", require("./routes/Contact"))
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
