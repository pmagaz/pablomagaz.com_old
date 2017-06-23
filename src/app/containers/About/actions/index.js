import api from '../api';
import ActionTypes from '../actionTypes';

export function getAbout( { params } ) {
  return {
    type: ActionTypes.ABOUT_REQUEST,
    request: api.fetchAbout(params)
  };
}
