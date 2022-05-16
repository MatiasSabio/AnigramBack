const jwt = require('jsonwebtoken');

require('dotenv').config();

const authenticate = async (req, res, next) => {
  const token = await req.headers.authorization?.split(' ')[1];
  try {
    const verified = jwt.verify(token, process.env.SECRET);
    req.verifiedUser = verified;
    next();
  } catch (e) {
    console.log(e);
    next();
  }
  // console.log(verified);
};
const authen = async (req) => {
  const token = await req.headers.authorization?.split(' ')[1];

  const verified = jwt.verify(token, process.env.SECRET);
  return verified;
  // console.log(verified);
};

module.exports = {
  authenticate,
  authen,
};
