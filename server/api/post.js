import needle from 'needle';
import { SiteConf } from '../../src/base';

export const postApiHandler = async (req, res) => {
  const { slug } = req.params;
  const url = `${ SiteConf.PostApi.replace(':slug', slug) }`;
  const postDetail = await needle('get', url);
  const { body } = postDetail;
  if (body.errors) res.status(404).json({});
  else {
    const post = body.posts[0];
    const tag = post.tags[0].slug;
    const tag2 = post.tags[1] && post.tags[1].slug;
    const relatedPost = await needle('get', `${ SiteConf.RelatedApiUrl }${ post.slug }/${ tag }/${ tag2 }`);
    const related = relatedPost.body;
    post['related'] = related;
    res.json(post); 
  }
};
