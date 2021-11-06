// This utility module will send email notification to users anytime certain actions are performed
const nodemailer = require('nodemailer');
const AppError = require('./AppError');
const { transporter } = require('./transporter');

const emailNotif = (action, email) => {
    try{
        
    } catch(error){
        throw new AppError('Error while sending email notification', 500)
    }
}

module.exports = { emailNotif };