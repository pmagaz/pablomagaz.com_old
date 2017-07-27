import { createReducer } from 'base';
import ActionTypes from '../actionTypes';
import { ContactCollection } from '../models';

function contactRequest ( state ) { return state; }

function contactError ( state ) { return state; }

function contactSuccess ( state, action ) {
  return state.update ( 'data', () => action.payload );
}

const actionHandlers = {
  [ActionTypes.CONTACT_REQUEST]: contactRequest,
  [ActionTypes.CONTACT_SUCCESS]: contactSuccess,
  [ActionTypes.CONTACT_ERROR]: contactError
};

export default createReducer(actionHandlers, new ContactCollection());
