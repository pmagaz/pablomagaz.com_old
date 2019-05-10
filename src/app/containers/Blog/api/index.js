import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';
import { responseBlogModel } from '../models';

export default {
  fetchPosts(params) {
    let reqParams = '';
    const { tag, page } = params;
    if (tag) reqParams += `tag=${ tag }`;
    if (page) reqParams += `page=${ page }`;
    return fetch(`${ SiteConf.PostsApiUrl }${ reqParams }`)
      .then(res => {
        if (res.status !== 200) throw new Error('Bad response!');
        return res.json();
      })
      .then(payload => responseBlogModel(payload));
  }
};
