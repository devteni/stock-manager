require('dotenv').config();
const http = require('http');
const app = require('./app');
const database = require('./config/database');

const { PORT } = process.env;

const server = http.createServer(app);

const runServer = async () => {
  database.connect((err) => {
    if (err) throw err;
    console.log('Database Connected!');
  });

  server.listen(PORT, () => {
    console.log(`[SERVER]:--------->\nServer is running on port ${PORT}`);
  });
};

runServer();
