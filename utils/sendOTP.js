const nodemailer = require('nodemailer');
const AppError = require('./AppError');
const logger = require('./logger');
const { transporter } = require('./transporter');
const { FROM_EMAIL, EMAIL_PASS } = process.env;

const sendOTP = async (email, key) => {
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
  logger.info(`Check 2`);
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
