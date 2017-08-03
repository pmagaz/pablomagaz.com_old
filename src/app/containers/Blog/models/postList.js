import { Record } from 'immutable';
import { SiteConf } from 'base';

const PostListModel = new Record({
  id: -1,
  uuid: '',
  title: '',
  slug: '',
  image: '',
  resume: '',
  html: '',
  opening: '',
  tags: [],
  updated_at: '',
  feature_image: '',
  author: SiteConf.Author
});

export default PostListModel;
