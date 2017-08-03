import fetch from 'isomorphic-fetch';

import { SiteConf, formatPostContent } from 'base';
import { PostModel } from '../models/';

export default {

  fetchPost (slug) {
    return fetch(SiteConf.postApi.replace(':slug', slug))
      .then(req => req.json())
      .then(data => new PostModel(
        formatPostContent(data.posts[0]))
      );
    //.catch(err => window.location = '/404.html')
  },

};
