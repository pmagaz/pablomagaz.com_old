import { Record, List } from 'immutable';
import { generateList } from 'base';
import PostListModel from './postList';
import PaginationModel from './pagination';

const BlogCollection = Record({
  posts: List(),
  pagination: Record()
});

function setInitialState(initialState) {
  return initialState.Blog = new BlogCollection({
    posts: generateList( initialState.Blog.posts, PostListModel ),
    pagination: new PaginationModel( initialState.Blog.posts )
  });
}

export { PostListModel, PaginationModel, BlogCollection, setInitialState };
