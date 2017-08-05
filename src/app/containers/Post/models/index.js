import { Record } from 'immutable';
import { SiteConf } from 'base';

const PostModel = new Record({
  id: -1,
  url: '',
  slug: '',
  html: '',
  tags: '',
  title: '',
  image: '',
  author: SiteConf.Author,
  opening: '',
  updated_at: '',
  created_at: '',
  feature_image: '',
  meta_description: '',
});

function setInitialState(initialState) {
  return initialState.Post = new PostModel(initialState.Post);
}

export { PostModel, setInitialState };
