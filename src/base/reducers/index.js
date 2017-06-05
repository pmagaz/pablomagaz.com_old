import { combineReducers } from 'redux';
import About from 'containers/About/reducers';
import Blog from 'containers/Blog/reducers';
import Contact from 'containers/Contact/reducers';
import Main from 'containers/Main/reducers';
import Post from 'containers/Post/reducers';

export default combineReducers({
  About,
  Blog,
  Contact,
  Main,
  Post
});