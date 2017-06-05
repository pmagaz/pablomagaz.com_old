import fetch from 'isomorphic-fetch';

import { generateListWithSummary, SiteConf } from 'base';
import { PostListModel, PaginationModel } from '../models/';

export default {

  fetchPosts(page) {
    if (!page) page = 1;
    return fetch(`${SiteConf.postsApi}&page=${page}`)
    .then(req => req.json())
    .then( data => ({
      pagination: new PaginationModel(data.meta.pagination),
      list: generateListWithSummary(data.posts, PostListModel)
    }))
    .catch(err => console.log(err));
  },

};
