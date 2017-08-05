import { createSelector } from 'reselect';
import { SiteConf, getDate } from 'base';

export const postState = state => state.Post;

export const postSelector = createSelector(
  postState,
  post=> {
    const html = post.get('html');
    const formated = html.replace(SiteConf.postOpeningSplitChar,'');
    return post
      .set('html', formated)
      .set('updated_at', getDate(post.get('updated_at')));
  });