import fetch from 'isomorphic-fetch';
import { Record } from 'immutable';

import { SiteConf, RecordList } from 'base';
import { PaginationModel, PostModel } from '../models';

export default {

  fetchPosts(params) {
    const page = params ? `${params}` : `1`;
    return fetch(`${ SiteConf.PostsApiUrl }${ page }`)
    //return fetch(`${ SiteConf.PostsApi }${ query }`)
      .then(req => req.json())
      .then(payload => ({
        posts: RecordList(payload.posts, PostModel),
        pagination: new PaginationModel(payload.pagination),
      }))
      .catch(err => console.log(err));
  },
};
