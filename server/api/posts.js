import request from 'request';
import { SiteConf, getDate } from '../../src/base/';

export const postsApiHandler = (req, res, next)  => {
  request(`${ SiteConf.PostsApi }`, (error, response, body) => {
    if (error) {
      console.log(error);
      res.status(500).json(error);
    } else {
      const data = JSON.parse(body);
      const pagination = data.meta.pagination;
      const posts = PostList(data.posts);
      const result = { posts, pagination };
      res.json(result);
    }
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