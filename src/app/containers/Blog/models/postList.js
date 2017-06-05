import { Record } from 'immutable';

const PostListModel = new Record({
  id: -1,
  uuid: '',
  title: '',
  slug: '',
  image: '',
  resume: '',
  html: '',
  summary: '',
  tags: [],
  updated_at: '',
  author: 'Pablo Magaz'
});

export default PostListModel;
