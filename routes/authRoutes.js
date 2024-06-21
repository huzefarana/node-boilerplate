const express = require('express');
const { login } = require('../controllers/authController');
const authRouter = express.Router();

authRouter.post("/register", login);


module.exports = authRouter;