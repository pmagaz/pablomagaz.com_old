//import { Author } from './connector'

const resolvers = {
  Post: {
    author(post) {
      return post.getAuthor()
    },
  },
}

export default resolvers