import { createSelector } from 'reselect';

import { SiteConf } from 'base';

export const postsState = state => state.Blog.posts;
export const paginationState = state => state.Blog.pagination;

export const postsSelector = createSelector(
  postsState,
  posts => {
    return posts.map(post => {
      const reg = new RegExp(`^(.+?)${SiteConf.postOpeningSplitChar}`);
      const opening = reg.exec(post.html); 
      if (opening) post.opening = opening[1];
      return post;
    });
  });