/* eslint-disable no-underscore-dangle */
const { Photo, Category, User } = require('../models');
const { createJWToken } = require('../utils/auth');

const createCategory = async (_, { category }) => {
  // como le pase un type input ,
  //  me llega un obj , que tiene un obj category:{cover, name, emoji, path }
  const { cover, name, emoji, path } = category;
  const newCategory = new Category({ cover, name, emoji, path });
  await newCategory.save();
  return 'category created';
};

const createPhoto = async (_, { photo }, { user }) => {
  const { categoryID, src, likes, liked } = photo;
  const { _id } = await user;
  const newPhoto = new Photo({ categoryID, src, likes, liked, userID: _id });
  await newPhoto.save();
  return 'Photo created';
};
const createUser = async (_, { user }) => {
  const { name, email, password, isPremium } = user;
  const newUser = new User({ name, email, password, isPremium });
  await newUser.save();
  // const favs = new Favs({ userID: newUser._id, email: newUser.email });
  // await favs.save();
  const token = createJWToken(newUser);
  return token;
};
// const createFavs = async (_, { userID, email }) => {
//   const newFav = new Favs({ userID, email });
//   await newFav.save();
//   return newFav;
// };
const addOrDeleteFav = async (_, { photoID }, { user }) => {
  const { _id } = await user;
  let { likes } = await Photo.findById({ _id });
  const actualUser = await User.findById({ id: photoID });
  const userFavsWithoutPhoto = actualUser.favs.filter((id) => id !== photoID);
  if (actualUser.favs.length === userFavsWithoutPhoto.length) {
    userFavsWithoutPhoto.push(photoID);
    likes += 1;
  }
  likes -= 1;
  const photo = await Photo.findByIdAndUpdate(
    { _id: photoID },
    { $set: { likes } },
  );
  const userFavs = await User.findByIdAndUpdate(
    { _id },
    { $set: { favs: userFavsWithoutPhoto } },
  );
  photo.save();
  userFavs.save();
  return {
    name: actualUser.name,
    userID: actualUser._id,
    favs: userFavsWithoutPhoto,
  };
};

const login = async (_, { input }) => {
  const { email, password } = input;
  const user = await User.findOne({ email }).select('+password');
  if (!user) throw new Error('User Not Found');
  if (password !== user.password) throw new Error('Invalid Password');
  const token = createJWToken(user);
  return token;
};
const deleteUser = async (_, { id }) => {
  const user = await User.findByIdAndDelete(id);
  if (!user) throw new Error('User not find');
  return 'User deleted successfully';
};
const deleteCategory = async (_, { id }) => {
  const category = await Category.findByIdAndDelete(id);
  if (!category) throw new Error('Category not find');
  return 'Category deleted successfully';
};
module.exports = {
  createUser,
  createCategory,
  deleteCategory,
  createPhoto,
  login,
  deleteUser,
  // createFavs,
  addOrDeleteFav,
};
