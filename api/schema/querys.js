/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
const { Category, User, Favs, Photo } = require('../models');

const getAllCategories = async () => {
  const categories = await Category.find();
  return categories;
};
const getAllUsers = async () => {
  const users = await User.find();
  return users;
};
const getAllPhotos = async () => {
  const photos = await Photo.find();
  return photos;
};
const getOneUser = async (_, { id }) => {
  const user = await User.findOne({ _id: id });
  return user;
};
const getUserFavs = async (_, { id }) => {
  const favs = await Favs.find({ userID: id });
  return favs;
};
const getAllFavs = async () => {
  const favs = await Favs.find();
  return favs;
};
const getOneFavs = async (_, args, { user }) => {
  const { _id } = await user;
  const favs = await Favs.findOne({ userID: _id });
  console.log(_id);
  return favs;
};

module.exports = {
  getAllCategories,
  getAllUsers,
  getOneUser,
  getUserFavs,
  getAllFavs,
  getAllPhotos,
  getOneFavs,
};
