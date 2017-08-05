import request from 'request';
import { SiteConf, getDate } from '../../src/base/';

export const postApiHandler = (req, res, next)  => (
  request(`${ SiteConf.PostsApi }`, (error, response, body) => {
    const data = JSON.parse(body);
    const post = data.posts[0];
    post.updated_at = getDate(post.updated_at);
    const html = post.html;
    post.html = html.replace(SiteConf.postOpeningSplitChar,'');
    res.json(post);
  })
); 