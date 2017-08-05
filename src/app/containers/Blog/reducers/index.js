import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { BlogModel } from '../models';

const blogRequest = state => state;

const blogError = state => state;

const blogSuccess = (state, action) => {
  const pagination = action.payload.meta.pagination;
  const hasMorePosts = (pagination.page < pagination.pages) ? true : false;

  return state
    .update ('posts', () => state.posts.concat(action.payload.posts))
    //.update ('pagination', () => pagination.set('hasMorePosts', hasMorePosts));
};

const actionHandlers = {
  [ActionTypes.BLOG_REQUEST]: blogRequest,
  [ActionTypes.BLOG_SUCCESS]: blogSuccess,
  [ActionTypes.BLOG_ERROR]: blogError
};

export default createReducer(actionHandlers, new BlogModel());
