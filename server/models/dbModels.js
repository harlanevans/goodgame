const { Pool } = require('pg');

const PG_URI = 'postgres://yviqqtro:stRk3eoknaQF5OAKSgeyKTWKETFP2KlF@suleiman.db.elephantsql.com:5432/yviqqtro';

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed querty', text);
    return pool.query(text, params, callback);
  }
};