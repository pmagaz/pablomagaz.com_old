import { Record } from 'immutable';
import { SiteConf } from 'base';

const PostModel = Record({
  id: -1,
  uuid: '',
  title: '',
  slug: '',
  image: '',
  html: '',
  opening: '',
  tags: [],
  published_at: '',
  feature_image: '',
  author: SiteConf.Author
});

export default PostModel;
