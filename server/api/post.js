import needle from 'needle';
import { SiteConf, getDate } from '../../src/base/';

export const postApiHandler = (req, res)  => {
  const slug = req.params.slug;
  const url = `${ SiteConf.PostApi.replace(':slug', slug) }`;
  needle('get', url)
    .then(resp => {
      const data = resp.body;
      const post = data.posts[0];
      post.published_at = getDate(post.published_at);
      res.json(post);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}; 
