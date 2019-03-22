import {
  Register,
  Login,
  LogOut,
  createQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion
} from '../connectors';

const resolvers = {
  Query: {
    question: async (root, { _id }, { mongo }, info) => {
      return getQuestion(_id, mongo);
    },
    logOut: async (root, args, { mongo, user }, info) => {
      return LogOut(mongo, user);
    },
    currentUser: async (root, args, { mongo, user }, info) => {
      return user;
    },
  },
  Mutation: {
    signup: async (root, { name, email, password }, { mongo }, info) => {
      return Register(name, email, password, mongo);
    },
    login: async (root, { email, password }, { mongo }) => {
      return Login(email, password, mongo)
    },
    createQuestion: async (root,
      { title, question, user, tags, answers },
      { mongo }, info) => {
      return createQuestion(title, question, user, tags, answers, mongo)
    },
    deleteQuestion: async (root, { _id }, { mongo }, info) => {
      return deleteQuestion(_id, mongo);
    },
    updateQuestion: async (root,
      { _id, title, question, createAt, user, tags, answers },
      { mongo }, info) => {
      return updateQuestion(_id, title, question, createAt, user, tags, answers, mongo)
    }
  },
}

export default resolvers;