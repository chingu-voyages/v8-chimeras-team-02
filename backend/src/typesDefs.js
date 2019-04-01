
const typeDefs = [`

    scalar Date

    enum Permission {
      ADMIN
      USER
      QUESTIONCREATE
      QUESTIONUPDATE
      QUESTIONDELETE
      PERMISSIONUPDATE
    }

    type User {
      _id: ID! 
      name: String!
      email: String! 
      password: String!
      rememberToken: String
      resetTokenExpiry: Float
      permissions: [Permission]
    }

    type Question {
      _id: ID! 
      title: String!
      question: String!
      createAt: Date!
      updatedAt: Date!
      user: User!
      tags: [String]
      answers: [Answer]
    }

    type Answer {
      _id: ID! 
      answer: String!
      createAt: Date!
      updatedAt: Date!
      user: User!
    }
    
    type Query {
      question(_id: ID!): Question
      answer(question_id: ID!, _id: ID!): Answer
      logOut:User
      currentUser:User
    }
    type Mutation {
      signup(name:String!,email:String!,password:String!): User
      login(email:String!,password:String!):User

      createQuestion( 
        title: String!, 
        question: String!, 
        user_id: ID!, 
        tags: [String],
        answers_ids: [ID]): Question

      updateQuestion(
        _id: ID!,
        title: String!,
        question: String!,
        createAt: Date!,
        user_id: ID!, 
        tags: [String]!,
        answers_ids: [ID]!): Question

      deleteQuestion(_id: ID!): Question

      createAnswer( 
        question_id: ID!,
        answer: String!, 
        user_id: ID!): Answer

      updateAnswer(
        question_id: ID!, 
        _id: ID!, 
        newAnswer: String!): Answer

      deleteAnswer( 
        question_id: ID!,
         _id: ID!): Answer
    }

    schema {
      query: Query
      mutation: Mutation
    }
  `];
export default typeDefs;