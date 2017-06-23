import { Record } from 'immutable';

const PostModel = Record({
  id: -1,
  url: '',
  slug: '',
  html: '',
  title: '',
  image: '',
  updated_at: '',
  created_at: '',
  meta_description: '',
  author: 'Pablo Magaz'
});

function setInitialState(initialState) {
  return initialState.Post = new PostModel(initialState.Post);
}

export { PostModel, setInitialState };
