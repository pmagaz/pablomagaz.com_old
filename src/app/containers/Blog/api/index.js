import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';
import { responseBlogModel } from '../models';

export default {

  fetchPosts(params) {
    let reqParams = '';
    if (params && params.tag) reqParams += `tag:${params.tag}`
    return fetch(`${ SiteConf.PostsApiUrl }${reqParams}`)
      .then(req => req.json())
      .then(payload => responseBlogModel(payload))
      .catch(err => {
        console.log(44444, err);
        return err;
      });
  },
};
