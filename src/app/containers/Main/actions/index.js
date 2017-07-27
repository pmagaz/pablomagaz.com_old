import LogoAPI from '../api';
import ActionTypes from '../actionTypes';

export default {
  getLogo( { params } ) {
    return {
      type: ActionTypes.LOGO_REQUEST,
      request: LogoAPI.fetchLogo(params)
    };
  }
};
