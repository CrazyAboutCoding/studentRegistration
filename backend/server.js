const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'studentDetails',
  password: 'jroot',
  port: 5432,
});

module.exports = pool;