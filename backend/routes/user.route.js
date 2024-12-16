const express = require("express");
const router = express.Router();
const createuser = require("../controllers/user.controller.js");
const { body, validationResult } = require('express-validator');

// Define route for POST /createuser
router.post(
    "/createuser",
    [
        body('email', 'Invalid email').isEmail(),
        body('password', 'Password must be at least 5 characters long').isLength({ min: 5 }),
    ],
    async (req, res, next) => {
        // Handle validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            // Call the controller
            await createuser(req, res);
        } catch (error) {
            console.error("Error in /createuser route:", error.message);
            next(error); // Pass error to the error-handling middleware
        }
    }
);

module.exports = router;
