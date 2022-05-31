require('dotenv').config();
const { Client } = require('pg');

const database = new Client({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: 'postgres',
  password: process.env.DB_PASS,
  port: 5432,
});

module.exports = database;
