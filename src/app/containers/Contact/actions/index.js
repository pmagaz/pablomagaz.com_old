import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getContact( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.CONTACT_REQUEST),
    request: api.fetchContact(params)
  };
}
