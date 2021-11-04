const bcrypt = require('bcryptjs');
const AppError = require("../../utils/AppError");
const { decodeUserWithToken } = require('../../services/token.service');
const User = require('../../models/user.model');
const Asset = require('../../models/asset.model');



/* Loan controllers */
exports.getLoan = async(req, res, next) => {
    try{
        // get loan details
        const loanDetails = req.body;

        // get total portfolio value
        const portfolioVal = null;
        // check if loan amount is <= 60% of portfolio value
        if(loanDetails['loanAmount'] <= ((0.6*portfolioVal) + portfolioVal)){
            // go ahead
        }
        return res.status(200).json({ message: 'Cannot apply for loan'});

    }catch(error){
        throw new AppError('Error while applying for loan', 500);
    }
}


exports.viewLoanProfile = async(req, res, next) => {
    try {
        
    } catch (error) {
        throw new AppError('Error while getting loan profile', 500);
    }
}

