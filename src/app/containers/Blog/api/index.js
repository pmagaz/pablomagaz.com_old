import fetch from 'isomorphic-fetch';

import { SiteConf, RecordList } from 'base';
import { PaginationModel, PostModel, helpers } from '../models';

export default {

  fetchPosts(params) {
    const query = params ? `&page=${params}` : `&page=1`;
    return fetch(`${ SiteConf.PostsApi }${ query }`)
      .then(req => req.json())
      .then(payload => ({
        posts: RecordList(payload.posts, PostModel),
        pagination: new PaginationModel(payload.meta.pagination)
      }))
      .catch(err => console.log(err));
  },
};
