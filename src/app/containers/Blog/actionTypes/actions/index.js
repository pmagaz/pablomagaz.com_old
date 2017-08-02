import api from '../api';
import ActionTypes from '../actionTypes';

export function getPosts({ page }) {
  return {
    type: ActionTypes.BLOG_REQUEST,
    request: api.fetchPosts(page)
  };
}

export function cleanPost() {
  return {
    type: ActionTypes.CLEAN_POST
  };
}
