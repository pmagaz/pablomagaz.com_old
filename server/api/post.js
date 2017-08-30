import needle from 'needle';
import { SiteConf, getDate } from '../../src/base/';

export const postApiHandler = (req, res)  => {
  const slug = req.params.slug;
  const url = `${ SiteConf.PostApi.replace(':slug', slug) }`;
  needle('get', url)
    .then(resp => {
      const data = resp.body;
      if (data.errors)  res.status(404).json({});
      else {
        const post = data.posts[0];
        post.published_at = getDate(post.published_at);
        res.json(post); 
      } 
    })
    .catch(() => res.status(500).send());
}; 
