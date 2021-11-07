const AppError = require('../../utils/AppError');
const { decodeUserWithToken } = require('../../utils/token');
const Asset = require('../../models/asset.model');
const { applyForLoan, outstandingLoanExists, pullLoanDetails } = require('../../services/loan.service');
const { getPortfolioValue } = require('../../services/portfolio.service');

/* Loan controllers */
exports.getLoan = async (req, res) => {
  try {
    // get loan details
    const loanDetails = req.body;
    const { loanAmount, loanPeriod} = loanDetails;

    let token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const userID = decodeUserWithToken(token);
    const { id } = userID;

    // get total portfolio value
    const portfolioVal = await getPortfolioValue(id);

    // check if user has an outstanding loan
    const outstandingLoan = await outstandingLoanExists(id);
    if(outstandingLoan != null){
      return res.status(200).json({ status: 'success', message: 'Your have an outstanding loan to pay up.'})
    }

    // check if loan amount is <= 60% of portfolio value
    if (loanAmount <= 0.6 * portfolioVal + portfolioVal) {
      // go ahead
      const newLoan = await applyForLoan(loanDetails, loanAmount, loanPeriod, id);
      return res.status(200).json({ status: 'success', message: 'Successfully applied for loan', data: newLoan })
    };
    return res.status(200).json({ status: 'success', message: 'Cannot apply for loan' });
  } catch (error) {
    throw new AppError(`Error while applying for loan: ${error}`, 500);
  }
};

exports.viewLoanProfile = async (req, res) => {
  try {
    let token =
      req.body.token || req.query.token || req.headers['x-access-token'];
    const userID = decodeUserWithToken(token);
    const { id } = userID;

    // pull current loan details
    const currentLoan = await pullLoanDetails(id);
    if(currentLoan != null){
      return res.status(200).json({ status: 'success', message: 'Your loan details:', data: currentLoan });
    };
    return res.status(200).json({ status: 'success', message:'You have no active loan', data: [] });
  } catch (error) {
    throw new AppError(`Error while getting loan profile: ${error}`, 500);
  }
};
