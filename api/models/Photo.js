const { Schema, model } = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const photoSchema = new Schema(
  {
    categoryID: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    liked: {
      type: Boolean,
      required: true,
    },
    userID: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);
photoSchema.plugin(mongooseUniqueValidator);
module.exports = model('Photo', photoSchema);
