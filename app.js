const { urlencoded, json } = require('express');
const apiRoutes = require('./routes/index.routes');
const verifyToken = require('./middlewares/verifyToken')
const express = require('express');
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', verifyToken, (req, res) => {
    res.send('Welcome to the stock manager app.');
});

// handle unknown routes
app.get('*', (req, res) => {
    res.send('404 error! Route does not exist.'); 
})

app.use(apiRoutes);

module.exports = app;