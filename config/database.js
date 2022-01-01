const db = require('mongoose');

const { MONGO_URI } = process.env;

const database = () => {
  db.connect(MONGO_URI)
    // eslint-disable-next-line no-console
    .then(() => console.log('Database connected successfully.'))
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log(`Database connection failed. exiting now ... ${error}`);
      process.exit(1);
    });
};

module.exports = database;
