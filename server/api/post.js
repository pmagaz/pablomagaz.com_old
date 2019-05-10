import needle from 'needle';
import { SiteConf } from '../../src/base';

export const postApiHandler = (req, res) => {
  const { slug } = req.params;
  const url = `${ SiteConf.PostApi.replace(':slug', slug) }`;
  needle('get', url)
    .then(resp => {
      const data = resp.body;
      if (data.errors) res.status(404).json({});
      else {
        const post = data.posts[0];
        res.json(post);
      }
    })
    .catch(() => res.status(500).send());
};
