const db = require('mongoose');
const MONGO_URI = process.env.MONGO_URI

exports.database = () => {
    db.connect(MONGO_URI)
        .then(() => console.log(`Database connected successfully.`))
        .catch(() => {
            console.log(`Database connection failed. exiting now ...`)
            process.exit(1);
        });
};