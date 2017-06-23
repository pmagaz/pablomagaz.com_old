import api from '../api';
import ActionTypes from '../actionTypes';

export function getContact( { params } ) {
  return {
    type: ActionTypes.CONTACT_REQUEST,
    request: api.fetchContact(params)
  };
}
