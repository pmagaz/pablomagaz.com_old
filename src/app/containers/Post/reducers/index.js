import { createReducer, SiteConf } from 'base';
import ActionTypes from '../actionTypes';
import { PostModel } from '../models';

const postRequest = state => state;

const postError = state => state;

const postSuccess = (state, { payload }) => ( 
  state
    .set('id', payload.id)
    .set('tags', payload.tags)
    .set('html', payload.html)
    .set('title', payload.title)
    .set('image', payload.image)
    .set('author', SiteConf.Author)
    .set('created_at', payload.created_at)
    .set('feature_image', payload.feature_image)
);

const cleanPost = state => (
  state
    .set('id', -1)
    .set('tags', '')
    .set('html', '')
    .set('title', '')
    .set('image', '')
    .set('author', '')
    .set('created_at', '')
);

const actionHandlers = {
  [ActionTypes.POST_REQUEST]: postRequest,
  [ActionTypes.POST_SUCCESS]: postSuccess,
  [ActionTypes.POST_ERROR]: postError,
  [ActionTypes.CLEAN_POST]: cleanPost
};

export default createReducer(actionHandlers, new PostModel());