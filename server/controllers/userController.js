const db = require('../models/dbModels.js')

// queries should only be to the user Table
const userController = {}

userController.createUser = (req, res, next) => {
  // request body should have username and password
  const { username, password } = req.body;

  const createQuery = `INSERT INTO users (username, password) VALUES (${username}, ${password})`
  db.query(createQuery, (err, res) => {
    if (err) return next(err);

    res.locals.username = username;
    return next();
  });
};

userController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const findQuery = `SELECT * FROM users
  WHERE username = ${username} and password = ${password}`;

  db.query(findQuery, (err, res) => {
    if (err) return res.send('Wrong Username or Password');
    res.locals.username = username;
    return next();
  },
  )}

module.exports = userController;