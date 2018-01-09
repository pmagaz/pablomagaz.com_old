import { makeExecutableSchema } from "graphql-tools"

const typeDefs = `
  type Post {
    id: String
    uuid: String
    title: String
    slug: String
    created_at: String
    created_by: String
    published_at: String
    opening: String
  }
  type Query {
    post(id: String!): Post
  }
  schema {
    query: Query
  }
`

export default makeExecutableSchema({ typeDefs })
