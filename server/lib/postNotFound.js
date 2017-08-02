export default function postNotFound(renderProps, store) {
  const isPost = renderProps.params.slug;
  const postNotFound = (!~store.getState().Post.id) ? true : false;
  return (isPost && postNotFound) ? true : false;
}
