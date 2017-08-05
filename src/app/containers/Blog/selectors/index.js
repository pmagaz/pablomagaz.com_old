import { createSelector } from 'reselect';
import { SiteConf, getDate } from 'base';

export const postsState = state => state.Blog.posts;
export const paginationState = state => state.Blog.pagination;

export const postsSelector = createSelector(
  postsState,
  posts => (
    posts.map(post => {
      let opening;
      if (!post.get('rendered')) {
        const reg = new RegExp(`^(.+?)${ SiteConf.postOpeningSplitChar }`);
        const result = reg.exec(post.get('html'));
        opening = result ? result[1] : post.get('title');
      }
      return post
        .set('html', '')
        .set('rendered', true)
        .set('opening', opening)
        .set('updated_at', getDate(post.get('updated_at')));
    })
  ));