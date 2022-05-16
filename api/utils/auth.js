require('dotenv').config();
const jwt = require('jsonwebtoken');

const createJWToken = (user) => {
  const input = {
    name: user.name,
    email: user.email,
    isPremium: user.isPremium,
    favs: user.favs,
    // eslint-disable-next-line no-underscore-dangle
    _id: user._id,
  };
  return jwt.sign(input, process.env.SECRET, {
    expiresIn: '1y',
  });
};
module.exports = { createJWToken };
