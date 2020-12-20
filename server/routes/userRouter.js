const express = require('express');
const userController = require('../controllers/userController.js')

const route = express.Router();

route.get('/', userController.verifyUser, (req, res) => res.status(200).json(res.locals.username).redirect('/dashboard'));
// CREATE USER
route.post('/', userController.createUser, (req, res) => res.status(200).json(res.locals.username).redirect('/dashboard'));


module.exports = route;