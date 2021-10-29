require('dotenv').config();
const http = require('http');
const app = require('./app');
const { database } = require('./config/database');
const { PORT } = process.env;

const server = http.createServer(app);

const runServer = async() => {
    // database();
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}

runServer();