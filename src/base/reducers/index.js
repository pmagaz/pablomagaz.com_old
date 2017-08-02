import { combineReducers } from 'redux';
import Blog from 'containers/Blog/reducers';
import Main from 'containers/Main/reducers';
import Post from 'containers/Post/reducers';

export default combineReducers({
  Main,
  Blog,
  Post
});