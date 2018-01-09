export default function contentNotFound(renderProps, store) {
  const isPost = renderProps.params.slug
  const isTag = renderProps.params.tag
  if (isPost) {
    return ~store.getState().Post.id ? false : true 
  }
  else if (isTag) {
    return (store.getState().Blog.posts.size) ? false : true 
  }
}
