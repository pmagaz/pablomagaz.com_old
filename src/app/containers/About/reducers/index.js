import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { AboutCollection } from '../models';

function aboutRequest ( state ) { return state; }

function aboutError ( state ) { return state; }

function aboutSuccess ( state, action ) {
  return state.update ( 'data', () => action.result );
}

const actionHandlers = {
  [ActionTypes.ABOUT_REQUEST]: aboutRequest,
  [ActionTypes.ABOUT_SUCCESS]: aboutSuccess,
  [ActionTypes.ABOUT_ERROR]: aboutError
};

export default createReducer(actionHandlers, new AboutCollection());
