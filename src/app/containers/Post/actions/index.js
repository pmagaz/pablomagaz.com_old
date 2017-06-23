import api from '../api';
import ActionTypes from '../actionTypes';

export function getPost(data) {
  return {
    type: ActionTypes.POST_REQUEST,
    request: api.fetchPost(data.slug)
  };
}

export function cleanPost() {
  return {
    type: ActionTypes.CLEAN_POST
  };
}
