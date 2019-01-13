import needle from 'needle';
import { SiteConf, formatDate } from 'base';

export const postsApiHandler = (req, res)  => {
  needle('get', SiteConf.PostsApi)
    .then(resp => {
      const data = resp.body;
      if (data.errors) res.status(404).json({ posts:[] });
      else {
        const filter = req.params.filter;
        const pagination = data.meta.pagination;
        const posts = PostList(data.posts, filter);
        const result = { posts, pagination };
        if (posts.length) res.json(result);
        else res.status(404).json({ posts:[] });
      }
    })
    .catch(() => res.status(500).send());
};

const resolveUniqueImage = image => {
  const imageName = image.split('/')[5];
  const extension = image.split('.')[1];
  const imageFile = imageName.split('-')[0];
  return `${SiteConf.uniqueImagePath}${imageFile}.${extension}`;
};

const generateOpening = html => {
  let i = 0;
  let opening;
  let max = SiteConf.postOpeningChars;
  const words = html.split(' ');
  opening = '';
  for (i; i <= max ; i++) {
    opening += `${words[i]} `;
  }
  opening += '...</p>';
  return opening;
};

const arrTags = (post) => (
  post.tags.map(tag => tag.slug)
);

const PostList = (posts, filter) => {
  return posts.filter((post) => {
    const reg = new RegExp(`^(.+?)${ SiteConf.postOpeningSplitChar }`);
    const result = reg.exec(post.html);

    if (result) post.opening = result[1];
    else post.opening = generateOpening(post.html);

    post.html = null;
    post.markdown = null;
    //post.published_at = formatDate(post.published_at);
    /*if (SiteConf.uniqueImagePath) {
    const image = post.feature_image || post.image;
      post.image = resolveUniqueImage(image);
    }*/

    if (filter) {
      const tagName = filter.split(':')[1];
      if (post.tags[0] && arrTags(post).includes(tagName)) return post;
      else return false;
    }
    else return post;
  }
  );


};
