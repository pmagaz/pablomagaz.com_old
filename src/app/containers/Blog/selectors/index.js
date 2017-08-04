import { createSelector } from 'reselect';

import { getPostListWithOpening, SiteConf } from 'base';
import { PostListModel } from '../models/';

export const postsState = state => state.Blog.posts;
export const paginationState = state => state.Blog.pagination;

export const extractOpening = (data) => {
  const reg = new RegExp(`^(.+?)${SiteConf.postOpeningSplitChar}`);
  const opening = reg.exec(data);
  return opening ? opening[1] : false; 
};

export const postsSelector = createSelector(
  postsState,
  posts => {
    return posts.map(post => {
      const opening = extractOpening(post.html);
      post.opening = opening;
      return post;
    });
    //return getPostListWithOpening(posts, PostListModel)
    //return getPostListWithOpening(posts, PostListModel)

  });
/*
export const paginationSelector = createSelector(
  paginationState,
  pagination => {
    console.log(3333, pagination);
    if(pagination.meta ) return new PaginationModel(pagination.meta.pagination) 
  }
);*/