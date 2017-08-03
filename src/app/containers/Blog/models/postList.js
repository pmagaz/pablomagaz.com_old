import { Record } from 'immutable';

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
  author: 'Pablo Magaz'
});

export default PostListModel;
