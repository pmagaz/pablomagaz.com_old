import { Record } from 'immutable';

const PostModel = new Record({
  id: -1,
  url: '',
  slug: '',
  html: '',
  tags: '',
  title: '',
  image: '',
  opening: '',
  updated_at: '',
  created_at: '',
  feature_image: '',
  meta_description: '',
  author: 'Pablo Magaz'
});

function setInitialState(initialState) {
  return initialState.Post = new PostModel(initialState.Post);
}

export { PostModel, setInitialState };
