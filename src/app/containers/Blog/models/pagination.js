import { Record } from 'immutable'

const PaginationModel = Record({
  page: -1,
  limit: -1,
  pages: -1,
  total: -1,
  hasMorePosts: true,
})

export default PaginationModel
