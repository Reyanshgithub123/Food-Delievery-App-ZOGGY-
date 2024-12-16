const User = require("../models/User.js"); // Import the User model
const { validationResult } = require("express-validator");

const createuser = async (req, res) => {
    try {
      // Validate the request body
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
      }
  
      // Destructure data from request body
      const { name, email, password, location } = req.body;
  
      // Create a new user in the database
      const user = await User.create({ name, email, password, location });
  
      // Respond with success
      res.status(201).json({
        success: true,
        message: "User created successfully",
        user,
      });
    } catch (error) {
      console.error("Error in createuser controller:", error);
      res.status(500).json({ success: false, error: "Failed to create user" });
    }
  };
  
  module.exports = createuser;
  