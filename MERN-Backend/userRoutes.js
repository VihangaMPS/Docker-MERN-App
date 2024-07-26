const express = require('express');
const userController = require('./userController');

const userRouter = express.Router();

userRouter.route('/').post(userController.createUser).get(userController.getAllUsers)

module.exports = userRouter;