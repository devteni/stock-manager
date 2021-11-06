const nodemailer = require('nodemailer');
const { FROM_EMAIL, EMAIL_PASS } = process.env;

// create reusable transporter object using the default SMTP transport
export const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: 465,
    secure: true, //use ssl
    auth: {
      user:  FROM_EMAIL,
      pass:  EMAIL_PASS, // naturally, replace both with your real credentials or an application-specific password.
    },
});