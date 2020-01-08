import { Record } from 'immutable';
import { SiteConf } from 'base';

const PostModel = Record({
  id: -1,
  uuid: '',
  slug: '',
  html: '',
  tags: [],
  title: '',
  image: '',
  opening: '',
  published_at: '',
  feature_image: '',
  author: SiteConf.Author,
});

export default PostModel;
