const { Pool } = require("pg")

const pool = new Pool({
  user: 'emmaadaoranwumeh',
  host: 'localhost',
  database: 'yelp',
  password: 'Peacesign$1',
  port: 5432,
});


module.exports = {
  query: (text, params) => pool.query(text, params),
}