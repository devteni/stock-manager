const { urlencoded, json } = require('express');
const YAML = require('yamljs');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const express = require('express');
const apiRoutes = require('./routes/index.routes');

const app = express();

// Load swagger definitions
const swaggerDefinition = YAML.load('./docs/docs.yaml');
const options = {
  swaggerDefinition,
  apis: ['./routes/*.js'],
};
const swaggerSpec = swaggerJSDoc(options);

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
  res.send('Welcome to the stock manager app.');
});

app.use(apiRoutes);

// handle unknown routes
app.all('*', (req, res) => {
  res.send('404 error! Route does not exist.');
});

module.exports = app;
