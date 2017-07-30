import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { PostModel } from '../models';

const postRequest = state => state;

const postError = state => state;

const postSuccess = (state, action) =>
  state.merge(action.payload)
        .set('author', 'Pablo Magaz');

const cleanPost = state => 
  state.merge({
    html: '',
    title: '',
    image: '',
    author: '',
    created_at: '',
  });

const actionHandlers = {
  [ActionTypes.POST_REQUEST]: postRequest,
  [ActionTypes.POST_SUCCESS]: postSuccess,
  [ActionTypes.POST_ERROR]: postError,
  [ActionTypes.CLEAN_POST]: cleanPost
};

export default createReducer(actionHandlers, new PostModel());
