import needle from 'needle';
import { SiteConf, getDate } from 'base';

export const postsApiHandler = (req, res)  => {
  needle('get', SiteConf.PostsApi)
    .then(resp => {
      const data = resp.body;
      const filter = req.params.filter;
      const pagination = data.meta.pagination;
      const posts = PostList(data.posts, filter);
      const result = { posts, pagination };
      res.json(result);
    })
    .catch(err => {
      res.status(500).json(err);
    });
}; 

export const PostList = (posts, filter) => {
  const data = [];
  posts.map((post) => {
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
    if (filter) {
      if (post.tags[0].slug === filter.split(':')[1]) data.push(post);
    }
    else data.push(post);
  }
  );
  return data;
};
