const pg = require('pg')

const client = new pg.Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '@Holmes1914',
  port: 5432,
})

module.exports = client
