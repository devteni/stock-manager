const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const loanSchema = new Schema({
  userId: {
    type: String,
  },
  loanAmount: {
    type: Number,
    required: true,
  },
  loanPeriod: {
    type: Number,
    required: true,
  },
  monthlyRepayment: {
    type: Number,
  },
  loanInterest: {
    type: Number,
  },
  dateApplied: {
    type: Date,
    default: Date.now(),
  },
  dueDate: {
    type: Date,
  },
  loanStatus:{
    type: Boolean,
    default: 'Not paid',
    enum: [ 'Not paid', 'paid' ]
  }
});

const loan = model('loan', loanSchema);
module.exports = loan;
