import api from '../api';
import ActionTypes from '../actionTypes';

export const getPost = (data) => ({
  type: ActionTypes.POST_REQUEST,
  request: api.fetchPost(data.slug)
});

export const cleanPost = () => ({
  type: ActionTypes.CLEAN_POST
});
