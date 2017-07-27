import { generateFetchTypes } from 'base';
import api from '../api';
import ActionTypes from '../actionTypes';

export function getAbout( { params } ) {
  return {
    types: generateFetchTypes(ActionTypes.ABOUT_REQUEST),
    request: api.fetchAbout(params)
  };
}
