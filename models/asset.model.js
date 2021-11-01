const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const assetSchema = new Schema({
    userId: {
        type: String
    },
    symbol: {
        type: String,
        required: true,
        uppercase: true
    },
    totalQuantity: {
        type: Number,
        required: true
    },
    equityValue: {
        type: Number,
        required: true
    },
    pricePerShare: {
        type: Number,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now()
    }
});

const asset = model('asset', assetSchema);
module.exports = asset;