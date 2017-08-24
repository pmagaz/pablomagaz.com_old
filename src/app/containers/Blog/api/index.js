import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';
import { responseBlogModel } from '../models';

export default {

  fetchPosts(params) {
    let reqParams = '';
    if (params && params.tag) reqParams += `tag:${params.tag}`
    return fetch(`${ SiteConf.PostsApiUrl }${reqParams}`)
      .then(res => {
        if (res.status !== 200) throw new Error('Bad response!');
        return res.json();
      })
      .then(payload => responseBlogModel(payload));
  },
};
