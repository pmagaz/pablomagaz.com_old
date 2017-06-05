import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getPosts({ page }) {
  return {
    types: generateFetchTypes(ActionTypes.BLOG_REQUEST),
    request: api.fetchPosts(page)
  };
}

export function cleanPost() {
  return {
    type: ActionTypes.CLEAN_POST
  };
}
