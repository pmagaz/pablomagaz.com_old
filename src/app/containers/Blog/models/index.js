import { Record, List } from 'immutable';
import PostListModel from './postList';
import PaginationModel from './pagination';
import { generateList } from 'base';

const BlogCollection = Record({
  posts: List(),
  pagination: Record()
});

function setInitialState(initialState) {
  return initialState.Blog = new BlogCollection({
    posts: new List(initialState.Blog.posts),
    //posts: generateList(initialState.Blog.posts, PostListModel),
    pagination: new PaginationModel(initialState.Blog.posts)
  });
}

export { PostListModel, PaginationModel, BlogCollection, setInitialState };
