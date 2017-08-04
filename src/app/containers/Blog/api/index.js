import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';

export default {

  fetchPosts(params) {
    const query = params ? `&page=${params}` : `&page=1`;
    return fetch(`${ SiteConf.PostsApi }${ query }`)
      .then(req => req.json())
      .catch(err => console.log(err));
  },

};
