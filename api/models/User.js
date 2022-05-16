/* eslint-disable linebreak-style */
const { Schema, model } = require('mongoose');
const mongooseUniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema(
  {
    // avatar: {
    //   type: String,
    //   required: true,
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      // match: [
      //   /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
      //   'Provide a valid email address',
      // ],
    },
    isPremium: {
      type: Boolean,
      required: true,
    },
    favs: {
      type: [],
      required: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

userSchema.plugin(mongooseUniqueValidator);

module.exports = model('User', userSchema);
