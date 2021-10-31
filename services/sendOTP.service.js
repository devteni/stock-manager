const nodemailer = require("nodemailer");
const AppError = require("../utils/AppError");
const logger = require('../utils/logger');

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: 465,
  secure: true, //use ssl
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASS, // naturally, replace both with your real credentials or an application-specific password.
  },
});

const sendOTP = async (email, key,) => {
  // try {
    console.log(`sending email to ${email}`);
    const options = {
      from: `"Stock Manager" ${process.env.FROM_EMAIL}`,
      to: email,
      subject: 'OTP from stock manager API',
      html: `<p>Your One-Time-Passcode(OTP) from stock manager is <pre>${key}</pre></p>`,
    };

    logger.info(`Check 1`);
    // Send email
    let sendMail = await transporter.sendMail(options);
    logger.info(`Check 2`)
    if (!sendMail) {
        return new AppError(`Error while sending mail.`, 500);
    }
    let res = `OTP sent to ${email}`;
    return res;
  // } catch (error) {
  //   throw new AppError(`Error while sending OTP.`, 500)
  // }
};

module.exports = sendOTP;