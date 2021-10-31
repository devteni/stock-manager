const jwt = require('jsonwebtoken');
const AppError = require('../utils/AppError');
const { JWT_SECRET, JWT_EXPIRY } = process.env;
exports.createToken = (user) => {
    try {
        let token = jwt.sign({
            id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            email: user.email,
            is_2fa_enabled: user.is_2fa_enabled
        }, JWT_SECRET, {expiresIn: JWT_EXPIRY});
        return token;
    } catch (err) {
        throw new AppError('Error while signing JWT', 500);
    }
}

exports.decodeToken = (token) => {
    try {
        let decodedToken = jwt.verify(token, JWT_SECRET);
        return decodedToken;
    } catch (err) {
        throw new AppError('Error while identifying user', 500);
    }
}