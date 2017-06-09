import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { PostModel } from '../models';

function postRequest ( state ) { return state; }

function postError ( state ) { return state; }

function postSuccess ( state, action ) {
  return state.merge(action.result)
        .set('author', 'Pablo Magaz');
}

function cleanPost ( state ) {
  return state.merge({
    html: '',
    title: '',
    image: '',
    author: '',
    created_at: '',
  });
}

const actionHandlers = {
  [ActionTypes.POST_REQUEST]: postRequest,
  [ActionTypes.POST_SUCCESS]: postSuccess,
  [ActionTypes.POST_ERROR]: postError,
  [ActionTypes.CLEAN_POST]: cleanPost
};

export default createReducer(actionHandlers, new PostModel());
