import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { BlogCollection } from '../models';

function blogRequest ( state ) { return state; }

function blogError ( state ) { return state; }

function blogSuccess ( state, action ) {
  const pagination = action.payload.pagination;
  const hasMorePosts = (pagination.page < pagination.pages) ? true : false;

  return state
    .update ('posts', () => state.posts.concat(action.payload.list ))
    .update ('pagination', () => pagination.set('hasMorePosts', hasMorePosts));
}

const actionHandlers = {
  [ActionTypes.BLOG_REQUEST]: blogRequest,
  [ActionTypes.BLOG_SUCCESS]: blogSuccess,
  [ActionTypes.BLOG_ERROR]: blogError
};

export default createReducer(actionHandlers, new BlogCollection());
