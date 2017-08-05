import { createSelector } from 'reselect';
import { SiteConf, getDate } from 'base';
import { PostModel } from '../models';

export const postsState = state => state.Blog.posts;
export const paginationState = state => state.Blog.pagination;

export const postsSelector = createSelector(
  postsState,
  posts => (
    posts.map(post => {
      if (!post.rendered) {
        const reg = new RegExp(`^(.+?)${ SiteConf.postOpeningSplitChar }`);
        const opening = reg.exec(post.html);
        if (opening) post.opening = opening[1];
        else post.opening = post.title;
      }
      post.html = '';
      post.rendered = true;
      post.updated_at = getDate(post.updated_at);
      return new PostModel(post);
    })
  ));