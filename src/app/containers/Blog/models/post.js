import { Record } from 'immutable';
import { SiteConf } from 'base';

const PostModel = new Record({
  id: -1,
  uuid: '',
  title: '',
  slug: '',
  image: '',
  html: '',
  opening: '',
  tags: [],
  updated_at: '',
  rendered: false,
  feature_image: '',
  author: SiteConf.Author
});

export default PostModel;
