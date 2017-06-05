import { Record, List } from 'immutable';
import { generateList, generateImmutable } from 'base';
import PostListModel from './postList';
import PaginationModel from './pagination';

const BlogCollection = new Record({
  posts: new List(),
  pagination: new Record()
});

function setInitialState(initialState) {
  return initialState.Blog = new BlogCollection({
    posts: generateList( initialState.Blog.posts, PostListModel ),
    pagination: new PaginationModel( initialState.Blog.posts )
  });
}

export { PostListModel, PaginationModel, BlogCollection, setInitialState };
