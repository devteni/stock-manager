const db = require('mongoose');
const MONGO_URI = process.env.MONGO_URI;

const database = () => {
  db.connect(MONGO_URI)
    .then(() => console.log(`Database connected successfully.`))
    .catch((error) => {
      console.log(`Database connection failed. exiting now ... ${error}`);
      process.exit(1);
    });
};

module.exports = database;
