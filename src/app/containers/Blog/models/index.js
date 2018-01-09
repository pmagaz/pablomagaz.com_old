import { Record, List } from 'immutable'

import { RecordList } from 'base'
import PostModel from './post'
import PaginationModel from './pagination'

export const BlogModel = Record({
  posts: List(),
  pagination: Record(),
})

export const responseBlogModel = payload => ({
  posts: RecordList(payload.posts, PostModel),
  pagination: new PaginationModel(payload.pagination),
})

export const setInitialState = initialState => (
  initialState.Blog = new BlogModel({
    posts: RecordList(initialState.Blog.posts, PostModel),
    pagination: new PaginationModel(initialState.Blog.posts),
  })
)

export { PostModel, PaginationModel }
