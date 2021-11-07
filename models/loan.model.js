const mongoose = require('mongoose');
const moment = require('moment');
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
  loanInterest: {
    type: Number,
    default: 20
  },
  repaymentAmount:{
    type: Number
  },
  monthlyRepayment: {
    type: Number,
  },
  amountPaid:{
    type: Number
  },
  dateApplied: {
    type: String,
    default: moment().format('MMMM Do YYYY, h:mm:ss a')
  },
  dueDate: {
    type: Date,
  },
  loanStatus:{
    type: String,
    default: 'Not paid',
    enum: [ 'Not paid', 'paid' ]
  }
});

const loan = model('loan', loanSchema);
module.exports = loan;
