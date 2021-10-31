const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const userSchema = new Schema({
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
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true
    },
    is_2fa_enabled: {
        type: Boolean,
        default: false
    },
    access_token: {
        type: String
    },
    createdAt:{
        type: Date,
        default: Date.now()
    },
    modifiedAt: {
        type: Date,
    }
})

const user = model('user', userSchema);
module.exports = user;
