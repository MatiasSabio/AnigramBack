const { gql } = require('apollo-server-express');

const inputs = gql`
  input Id {
    id: String
  }
  input PhotoInput {
    categoryId: String
    src: String
    likes: Int
    liked: Boolean
    userId: String
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
`;
module.exports = { inputs };
