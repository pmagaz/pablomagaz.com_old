import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';
import { PaginationModel, PostModel } from '../models';

export default {

  fetchPosts(params) {
    const query = params ? `&page=${params}` : `&page=1`;
    return fetch(`${ SiteConf.PostsApi }${ query }`)
      .then(req => req.json())
      .then(payload => payload)
      .catch(err => console.log(err));
  },

};
