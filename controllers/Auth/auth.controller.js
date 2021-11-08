const User = require('../../models/user.model');
// const speakeasy = require('speakeasy');
const bcrypt = require('bcryptjs');
const logger = require('../../utils/logger');
// const sendOTP = require('../../utils/sendOTP');
const AppError = require('../../utils/AppError');
const { createToken } = require('../../utils/token');

exports.signUp = async (req, res, next) => {
  try {
    // recieve input values
    logger.info(`We in the signup boy`);
    let user_details = req.body;
    let user_email = req.body.email;

    // check if user already exists in the database
    // check if user exists in database
    const existingUser = await User.findOne({ email: user_details.email });
    if (existingUser)
      return res
        .status(401)
        .json({ message: 'User with this email already exists ' });

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(user_details.password, salt);
    const newUser = await User.create({
      firstname: user_details.firstname,
      lastname: user_details.lastname,
      age: user_details.age,
      email: user_email,
      password: hashedPass,
      is_2fa_enabled: user_details.is_2fa_enabled,
    });

    logger.info(`Okay`);

    // generate OTP for user if 2fa is enabled.
    // if(user_details.is_2fa_enabled == true){
    //     const OTP_secret = speakeasy.generateSecret();
    //     let secret_key = OTP_secret.base32;

    //     logger.info(`Are we here?`)
    //     // call the sendOTP service.
    //     const send_OTP = await sendOTP(user_email, secret_key);
    //     if(!send_OTP) return new AppError(`Error while initiating the send OTP process`, 500);
    //     res.status(200).json({ status: 'success', message: sendOTP});
    // }

    // create JWT for user
    let access_token = createToken(newUser);
    if (!access_token)
      return new AppError(`Error while creating access token: ${error}`, 500);

    newUser.access_token = access_token;

    // save user to database
    await newUser.save();
    return res.status(200).json({
      status: 'success',
      data: newUser,
      message:
        'Account created successfully, proceed to logging in and adding your portfolio record',
    });
  } catch (error) {
    console.log(
      new AppError(`An error occured while creating user: ${error}`, 500),
    );
    process.exit(1);
  }
};

exports.logIn = async (req, res, next) => {
  try {
    // get user credentials
    const { email, password } = req.body;

    // find user in the db
    const existingUser = await User.findOne({ email: email });
    if (!existingUser)
      return res.status(400).json({
        message: 'User with this email does not exist in the database',
      });

    // verify user's password
    const pass = await bcrypt.compare(password, existingUser.password);
    console.log(pass);
    if (!pass) return res.status(401).json({ message: 'Incorrect password!' });

    // create access token for user.
    let access_token = createToken(existingUser);
    if (!access_token)
      return new AppError(`Error while creating access token: ${error}`, 500);

    logger.info(`Are we here?`);
    // update access token
    existingUser.access_token = access_token;

    return res
      .status(200)
      .json({ status: 'success', message: 'login successful!', access_token });
  } catch (error) {
    throw new AppError(`Error while logging in: ${error}`, 500);
  }
};
