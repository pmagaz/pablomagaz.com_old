import api from '../api';
import ActionTypes from '../actionTypes';

export function getPosts({ params }) {
  return {
    type: ActionTypes.BLOG_REQUEST,
    request: api.fetchPosts(params)
  };
}

export function cleanPost() {
  return {
    type: ActionTypes.CLEAN_POST
  };
}