const { Schema } = require('mongoose');

const User = new Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required: true
    }
})