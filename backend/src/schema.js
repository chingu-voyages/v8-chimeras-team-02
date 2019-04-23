import { makeExecutableSchema } from 'graphql-tools';
import typeDefs from './typesDefs';
import resolvers from './resolvers';
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
