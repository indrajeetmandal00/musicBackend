// to create API routes
const express = require('express');
const authController = require('../controllers/auth.controllers'); 
const { route } = require('./music.routes');
const router = express.Router();


router.post("/register", authController.registerUser); //1️⃣B this is accessed by /api/auth/register

router.post("/login", authController.loginUser); //1️⃣C this is accessed by /api/auth/login

router.post("/logout", authController.logoutUser); //1️⃣D this is accessed by /api/auth/logout to logout the user by clearing the token cookie from the browser and then sending a response to the client that logout is successful and then we can redirect the user to the login page from the client side after logout is successful.


module.exports = router;