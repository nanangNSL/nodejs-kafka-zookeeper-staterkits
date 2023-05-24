require("dotenv").config();
const { ACCESS_TOKEN_SECRET, ACCESS_TOKEN_EXPIRE, REFRESH_TOKEN_SECRET, REFRESH_TOKEN_EXPIRE } = process.env;

const jwt = require("jsonwebtoken");

exports.generateAccessToken = (payload) => {
  return jwt.sign(payload, ACCESS_TOKEN_SECRET, { expiresIn: ACCESS_TOKEN_EXPIRE });
};

exports.generateRefreshToken = (payload) => {
  return jwt.sign(payload, REFRESH_TOKEN_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRE });
};

exports.verifyAccessToken = async (token, next) => {
    try {
        if(token){
            const decoded = jwt.verify(token, ACCESS_TOKEN_SECRET);
            if(decoded){
                return decoded;
            }
        }
    } catch (error) {
        next(error);
    }
};
exports.verifyGuard = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.status(401).json({ message: 'Forbiden' });
            return false;
        }
          const decoded = jwt.verify(token.split(' ')[1], ACCESS_TOKEN_SECRET);
          if (decoded.exp < Date.now() / 1000) {
            res.status(401).json({ message: 'Token is expired' });
            return false;
          }
          if(decoded) {
            req.user = decoded;
            next()
          }
    } catch (error) {
        next(error);
    }
  };
