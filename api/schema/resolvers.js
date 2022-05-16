const {
  getAllCategories,
  getAllUsers,
  getOneUser,
  getUserFavs,
  getAllFavs,
  getAllPhotos,
  getOneFavs,
} = require('./querys');
const {
  createCategory,
  deleteCategory,
  createPhoto,
  createUser,
  login,
  deleteUser,
  addOrDeleteFav,
} = require('./mutations');

const resolvers = {
  Query: {
    hello: () => 'Hello word',
    getAllCategories,
    getAllUsers,
    getOneUser,
    getUserFavs,
    getAllFavs,
    getAllPhotos,
    getOneFavs,
  },

  Mutation: {
    createCategory,
    deleteCategory,
    createPhoto,
    createUser,
    login,
    deleteUser,
    addOrDeleteFav,
  },
};
module.exports = { resolvers };
