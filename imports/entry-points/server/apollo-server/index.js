import { ApolloServer, gql } from 'apollo-server-express'
import { WebApp } from 'meteor/webapp'
import { getUser } from 'meteor/apollo'

import { typeDefs, resolvers, mocks } from './exec-schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks,
  context: async ({ req }) => ({
    user: await getUser(req.headers.authorization)
  })
})

server.applyMiddleware({
  app: WebApp.connectHandlers,
  path: '/graphql'
})

WebApp.connectHandlers.use('/graphql', (req, res) => {
  if (req.method === 'GET') {
    res.end()
  }
})
