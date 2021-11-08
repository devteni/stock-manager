const Loan = require('../models/loan.model');
const AppError = require('../utils/AppError');

const applyForLoan = async (loanDetails, loanAmount, loanPeriod, id) => {
  try {
    const newLoan = await Loan.create({ userId: id, ...loanDetails });
    const Irate = 0.2;

    const repaymentAmount = Irate * loanAmount + loanAmount;
    const monthlyRepayment = repaymentAmount / loanPeriod;

    newLoan.repaymentAmount = repaymentAmount;
    newLoan.monthlyRepayment = monthlyRepayment;
    await newLoan.save();
    return newLoan;
  } catch (error) {
    throw new AppError(
      'Error while creating Loan credentials in database',
      500,
    );
  }
};

const outstandingLoanExists = async (id) => {
  try {
    const outstandingLoan = await Loan.findOne({
      userId: id,
      loanStatus: 'Not paid',
    });
    if (outstandingLoan != null && outstandingLoan.userId === id) {
      return outstandingLoan;
    }
    return;
  } catch (error) {
    throw new AppError('Error while checking outstanding loan', 500);
  }
};

const pullLoanDetails = async (id) => {
  try {
    const currentLoan = await Loan.findOne({ userId: id });
    if (currentLoan != null && currentLoan.userId === id) {
      return currentLoan;
    }
    return;
  } catch (error) {
    throw new AppError(
      `Error while getting your loan details. Try again: ${error}`,
      500,
    );
  }
};

module.exports = { applyForLoan, outstandingLoanExists, pullLoanDetails };
