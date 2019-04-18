import { combineReducers } from 'redux';
import Blog from 'containers/Blog/reducers';
import Post from 'containers/Post/reducers';

export default combineReducers({
  Blog,
  Post
});