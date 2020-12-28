const db = require('../models/dbModels.js');

const gameController = {};

gameController.createGame = (req, res, next) => {
  const { title, description, genre, platform, review } = req.body;
  const createQuery = `INSERT INTO games(title, description, genre, platform, review) VALUES($1, $2, $3, $4, $5)`
  db.query(createQuery, [title, description, genre, platform, review], (err, response) => {
    if (err) return next(err);

    return next();
  })
};

gameController.readGames = (req, res, next) => {
  const getQuery = `SELECT * FROM "public"."games" LIMIT 100`
  db.query(getQuery, (err, response) => {
    if (err) return next(err)
    res.locals.games = response.rows
    return next();
  })

};

gameController.deleteGame = (req, res, next) => {

};


gameController.updateGame = (req, res, next) => {

};

module.exports = gameController;