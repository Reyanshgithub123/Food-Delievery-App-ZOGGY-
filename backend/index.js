const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Test POST route
app.post('/api/createuser', (req, res) => {
    console.log('Request received:', req.body);  // Check if request is coming
    res.status(200).json({ message: 'User created successfully!' });
});

// Start the server 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
