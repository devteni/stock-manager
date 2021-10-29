const { urlencoded, json } = require('express');
const express = require('express');
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send('Welcome to the stock manager app.');
});

// handle unknown routes
app.get('*', (req, res) => {
    res.send('404 error! Route does not exist.'); 
})

module.exports = app;