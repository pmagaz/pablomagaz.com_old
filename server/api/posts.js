import needle from 'needle';
import { SiteConf, getDate } from 'base';

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
export const postsApiHandler = (req, res)  => {
  needle('get', SiteConf.PostsApi)
    .then(resp => {
      const data = resp.body;
      const pagination = data.meta.pagination;
      const posts = PostList(data.posts);
      const result = { posts, pagination };
      res.json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}; 

export const PostList = (posts) => {
  return posts.map((post) => {
    const reg = new RegExp(`^(.+?)${ SiteConf.postOpeningSplitChar }`);
    const result = reg.exec(post.html);
    if (result) post.opening = result[1];
    else {
      let i = 0;
      let max = SiteConf.postOpeningChars;
      const words = post.html.split(' ');
      post.opening = '';
      for (i; i <= max ; i++) {
        post.opening += `${words[i]} `;
      }
      post.opening += '...</p>';
  
    }
    post.html = null;
    post.markdown = null;
    post.published_at = getDate(post.published_at);
    return post;
  }
  );
};
