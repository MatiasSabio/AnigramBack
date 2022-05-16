const { connect } = require('mongoose');
require('dotenv').config();

// eslint-disable-next-line import/prefer-default-export
const connectDB = async (url) => {
  try {
    await connect(`${url}`);
    console.log('MongoDb connected');
  } catch (error) {
    console.error(error);
  }
};
module.exports = { connectDB };
