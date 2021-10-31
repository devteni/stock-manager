const { decodeToken } = require('../services/token.service');

const verifyToken = (req, res, next) => {
    // get authorization token from header or body or query
    let token = req.body.token ||
                req.query.token ||
                req.headers["x-access-token"];
    if(!token) return res.status(401).json({ message: 'Authorization token is required'});
    
    // decode the token
    let decodedToken = decodeToken(token);
    if(!decodedToken) return res.status(401).json({ message: "Invalid or expired authorization token. Please login. "});
    
    req.user = decodedToken;
    next();
};

module.exports = verifyToken;