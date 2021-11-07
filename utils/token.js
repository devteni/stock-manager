const jwt = require('jsonwebtoken');
const AppError = require('./AppError');
const { JWT_SECRET, JWT_EXPIRY } = process.env;

const createToken = (user) => {
  try {
    let token = jwt.sign(
      {
        id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        is_2fa_enabled: user.is_2fa_enabled,
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRY },
    );
    return token;
  } catch (err) {
    throw new AppError('Error while signing JWT', 500);
  }
};

const decodeToken = (token) => {
  try {
    let decodedToken = jwt.verify(token, JWT_SECRET);
    // if(!decodedToken) return 'Wrong or expired token';\
    return decodedToken;
  } catch (err) {
    throw new AppError('Error while identifying user', 500);
  }
};

const decodeUserWithToken = (token) => {
  try {
    // decode the token
    let userID = decodeToken(token);
    return userID;
  } catch (error) {
    throw new AppError('Error while getting user identity', 500);
  }
};

// Still trying to figure out how to use the req object here
// const getUserID = (req) => {
//   try{
//     let token =
//       req.headers['x-access-token'] || req.body.token || req.query.token;
//     const userID = decodeUserWithToken(token);
//     const { id } = userID;
//     return id;
//   } catch(error){
//     throw new AppError('Error while getting user id', 500);
//   }
// }

module.exports = { createToken, decodeToken, decodeUserWithToken };
