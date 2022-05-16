const { Schema, model } = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const categorySchema = new Schema({
  cover: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  emoji: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
  },
});

categorySchema.plugin(mongooseUniqueValidator);
module.exports = model('Category', categorySchema);
