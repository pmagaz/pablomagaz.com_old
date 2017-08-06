import fetch from 'isomorphic-fetch';

import { SiteConf } from 'base';
import { PostModel } from '../models/';

export default {

  fetchPost (slug) {
    return fetch(`${ SiteConf.PostApiUrl }${ slug}`)
      .then(req => req.json())
      .then(payload => new PostModel(payload));
  }
};
