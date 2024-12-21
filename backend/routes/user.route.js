const express = require("express");
const { body } = require("express-validator");
const router = express.Router();
const { createuser, login } = require("../controllers/user.controller"); 
// Define POST route with validation rules
router.post(
  "/createuser",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
    body("location").notEmpty().withMessage("Location is required"),
  ],
  createuser
);
router.post( 
  "/login",
  [
   
    body("email").isEmail().withMessage("Valid email is required"),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters"),
   
  ],
  login
); 



module.exports = router;
