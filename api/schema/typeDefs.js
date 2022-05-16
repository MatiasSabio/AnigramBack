const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID
    # avatar: String
    name: String
    email: String
    isPremium: Boolean
    password: String
    favs: [ID]
  }
  type Photo {
    id: ID
    categoryID: ID
    src: String
    likes: Int
    liked: Boolean
    userID: ID
  }
  type Category {
    id: ID
    cover: String
    name: String
    emoji: String
    path: String
  }
  type Favs {
    userID: ID
    name: String
    favs: [ID]
  }

  type Query {
    hello: String
    getAllCategories: [Category]
    getAllUsers: [User]
    getOneUser(id: ID): User
    getUserFavs(id: ID): [ID]
    getAllFavs: [Favs]
    getAllPhotos: [Photo]
    getOneFavs: Favs
  }
  input PhotoInput {
    categoryID: ID
    src: String
    likes: Int
    liked: Boolean
  }
  input UserInput {
    name: String
    email: String
    isPremium: Boolean
    password: String
  }
  input UserCredentials {
    email: String!
    password: String!
  }
  input CategoryInput {
    cover: String
    name: String
    emoji: String
    path: String
  }
  type Mutation {
    createCategory(category: CategoryInput): String
    createPhoto(photo: PhotoInput): String
    createFavs: Favs
    createUser(user: UserInput): String
    login(input: UserCredentials): String
    deleteCategory(id: ID): String
    deleteUser(id: ID): String
    addOrDeleteFav(photoID: ID): Favs
  }
`;
module.exports = { typeDefs };
