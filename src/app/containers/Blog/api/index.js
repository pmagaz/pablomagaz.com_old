import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';
import { responseBlogModel } from '../models';

export default {

  fetchPosts(params) {
    const page = params ? `${params}` : `1`;
    return fetch(`${ SiteConf.PostsApiUrl }${ page }`)
      .then(req => req.json())
      .then(payload => responseBlogModel(payload))
      .catch(err => console.log(err));
  },
};
