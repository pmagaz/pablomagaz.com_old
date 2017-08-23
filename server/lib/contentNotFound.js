export default function contentNotFound(renderProps, store) {
  const isPost = renderProps.params.slug;
  const isTag = renderProps.params.tag;
  if (isPost) {
    const postNotFound = (!~store.getState().Post.id) ? true : false;
    return (postNotFound) ? true : false; 
  }
  else if (isTag) {
    const tagNotFound = (store.getState().Blog.posts.size) ? false : true; 
    return (tagNotFound) ? true : false; 
  }
}
