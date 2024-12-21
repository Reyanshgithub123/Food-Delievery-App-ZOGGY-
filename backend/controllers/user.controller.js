const User = require("../models/User"); // Import User model
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt=require("jsonwebtoken")
// Create user function

const jwtSeceret="sjkfjbfjbfwefiowefiojifow"
const createuser = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debug incoming request data

    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // Destructure data from request body
    const { name, email, password, location } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const secPassword = await bcrypt.hash(password, salt);

    // Create and save a new user
    const user = await User.create({ name, email, password: secPassword, location });

    // Success response
    res.status(201).json({
      success: true,
      message: "User created successfully",
      user,
    });
  } catch (error) {
    console.error("Error in createuser controller:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to create user",
    });
  }
};

// Login function
const login = async (req, res) => {
  try {
    console.log("Request body:", req.body); // Debug incoming request data

    // Validate the request body
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        errors: errors.array(),
      });
    }

    // Destructure data from request body
    const { email, password } = req.body;

    // Find the user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        success: false,
        error: "Incorrect email",
      });
    }
    

    // Compare the passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: "Incorrect password",
      });
    }
    const data={
      user:{
        id:user.id
      }
    }
const authToken=jwt.sign(data,jwtSeceret)
    // Success response
    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      authToken:authToken
    });
  } catch (error) {
    console.error("Error in login controller:", error.message);
    res.status(500).json({
      success: false,
      error: "Failed to log in user",
    });
  }
};

// Export the functions
module.exports = {
  createuser,
  login,
};
