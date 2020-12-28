const express = require('express');
const gameController = require('../controllers/gameController.js')

const route = express.Router();

route.post('/create', gameController.createGame, gameController.readGames, (req, res) => res.status(200).json(res.locals.games));
route.delete('/', (req, res) => res.status(200).json());
route.post('/edit', (req, res) => res.status(200).json());
route.get('/', gameController.readGames, (req, res) => res.status(200).json(res.locals.games));