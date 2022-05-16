const { Schema, model } = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const favsSchema = new Schema({
  userID: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  favs: {
    type: [],
    required: true,
  },
});

favsSchema.plugin(mongooseUniqueValidator);
module.exports = model('Favs', favsSchema);
