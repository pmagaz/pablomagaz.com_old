import request from 'request';
import { SiteConf, getDate } from '../../src/base/';

export const postApiHandler = (req, res)  => {
  const slug = req.params.slug;
  request(`${ SiteConf.PostApi.replace(':slug', slug) }`, (error, response, body) => {
      const data = JSON.parse(body);
      const errors = data.errors;
      if (error || errors && errors[0].errorType === 'NotFoundError') {
      res.status(404).json(error);
    } else {
      const post = data.posts[0];
      post.published_at = getDate(post.published_at);
      const html = post.html;
      post.html = html.replace(SiteConf.postOpeningSplitChar,'');
      res.json(post);
    }
  });
}; 
