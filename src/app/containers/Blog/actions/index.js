import api from '../api'
import ActionTypes from '../actionTypes'

export const getPosts = params => ({
  type: ActionTypes.BLOG_REQUEST,
  request: api.fetchPosts(params),
})

export const cleanTagFilter = () => ({
  type: ActionTypes.CLEAN_TAG_FILTER
})

export const cleanPost = () => ({
  type: ActionTypes.CLEAN_POST
})