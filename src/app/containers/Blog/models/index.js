import { Record, List } from 'immutable';

import { RecordList } from 'base';
import PostModel from './post';
import * as helpers from './helpers';
import PaginationModel from './pagination';

const BlogModel = Record({
  posts: List(),
  pagination: Record()
});

function setInitialState(initialState) {
  return initialState.Blog = new BlogModel({
    //posts: new List(initialState.Blog.posts),
    posts: RecordList(initialState.Blog.posts, PostModel),
    pagination: new PaginationModel(initialState.Blog.posts)
  });
}

export { PostModel, PaginationModel, BlogModel, helpers, setInitialState };
