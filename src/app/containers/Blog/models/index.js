import { Record, List } from 'immutable';

import PostModel from './post';
import PaginationModel from './pagination';

const BlogModel = Record({
  posts: List(),
  pagination: Record()
});

function setInitialState(initialState) {
  return initialState.Blog = new BlogModel({
    posts: new List(initialState.Blog.posts),
    pagination: new PaginationModel(initialState.Blog.posts)
  });
}

export { PostModel, PaginationModel, BlogModel, setInitialState };
