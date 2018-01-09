import { Record } from 'immutable'
import { SiteConf } from 'base'

export const PostModel = Record({
  id: -1,
  url: '',
  slug: '',
  html: '',
  tags: [],
  title: '',
  image: '',
  updated_at: '',
  published_at: '',
  feature_image: '',
  meta_description: '',
  author: SiteConf.Author,
})

export const setInitialState = initialState => (
  initialState.Post = new PostModel(initialState.Post)
)