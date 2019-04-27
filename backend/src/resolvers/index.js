import {
  Register,
  Login,
  LogOut,
  createQuestion,
  deleteQuestion,
  updateQuestion,
  getQuestion,
  getQuestions,
  createAnswer,
  deleteAnswer,
  updateAnswer,
  getAnswer,
  searchQuestion,
} from '../connectors';

const resolvers = {
  Query: {
    question: async (root, { _id }, { mongo }, info) => {
      return getQuestion(_id, mongo);
    },
    questions: async (root, { number }, ctx, info) => {
      console.log(ctx.req);
      return getQuestions(number, ctx.mongo);
    },
    answer: async (root, { question_id, _id }, { mongo }, info) => {
      return getAnswer(question_id, _id, mongo);
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
      return Login(email, password, mongo);
    },
    createQuestion: async (root, { title, question, user_id, tags, answers }, { mongo }, info) => {
      return createQuestion(title, question, user_id, tags, answers, mongo);
    },
    deleteQuestion: async (root, { _id }, { mongo }, info) => {
      return deleteQuestion(_id, mongo);
    },
    updateQuestion: async (
      root,
      { _id, title, question, createAt, user, tags, answers },
      { mongo },
      info
    ) => {
      return updateQuestion(_id, title, question, createAt, user, tags, answers, mongo);
    },
    createAnswer: async (root, { question_id, answer, user_id }, { mongo }, info) => {
      return createAnswer(question_id, answer, user_id, mongo);
    },
    deleteAnswer: async (root, { question_id, _id }, { mongo }, info) => {
      return deleteAnswer(question_id, _id, mongo);
    },
    updateAnswer: async (root, { question_id, _id, newAnswer, iscorrect }, { mongo }, info) => {
      return updateAnswer(question_id, _id, newAnswer, iscorrect, mongo);
    },
    searchQuestion: async (root, { keywords, solved, unsolved, userId }, { mongo }, info) => {
      return searchQuestion(keywords, solved, unsolved, userId, mongo);
    },
  },
};

export default resolvers;
