import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { BlogModel } from '../models';

const blogRequest = state => state;

const blogError = state => state;

const blogSuccess = (state, action) => {
  const { posts, pagination } = action.payload;
  const hasMorePosts = pagination.page < pagination.pages;
  return state
    .update('posts', () => posts)
    .update('pagination', () => pagination)
    .update('pagination', () => pagination.set('hasMorePosts', hasMorePosts));
};

const cleanPosts = state => state.update('posts', posts => posts.clear());

const actionHandlers = {
  [ActionTypes.BLOG_REQUEST]: blogRequest,
  [ActionTypes.BLOG_SUCCESS]: blogSuccess,
  [ActionTypes.BLOG_ERROR]: blogError,
  [ActionTypes.CLEAN_POSTS]: cleanPosts
};

export default createReducer(actionHandlers, new BlogModel());
