import needle from 'needle';
import { SiteConf } from 'base';

export const postsApiHandler = (req, res) => {
  let params;
  const { filter } = req.params;
  if (!filter || !filter.includes('tag')) params = `limit=${ SiteConf.numPosts }&${ filter }`;

  needle(
    'get',
    `http://172.104.136.180:2369/ghost/api/v0.1/posts/?client_id=ghost-frontend&client_secret=113542417eed&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at%20desc&${ params }`
  )
    .then(resp => {
      const data = resp.body;
      if (data.errors) res.status(404).json({ posts: [] });
      else {
        const { pagination } = data.meta;
        const posts = PostList(data.posts, filter);
        const result = { posts, pagination };
        if (posts.length) res.json(result);
        else res.status(404).json({ posts: [] });
      }
    })
    .catch(() => res.status(500).send());
};

const generateOpening = html => {
  let i = 0;
  let opening;
  const max = SiteConf.postOpeningChars;
  const words = html.split(' ');
  opening = '';
  for (i; i <= max; i++) {
    opening += `${ words[i] } `;
  }
  opening += '...</p>';
  return opening;
};

const arrTags = post => post.tags.map(tag => tag.slug);

const PostList = (posts, filter) => {
  return posts.filter(post => {
    const reg = new RegExp(`^(.+?)${ SiteConf.postOpeningSplitChar }`);
    const result = reg.exec(post.html);

    if (result) post.opening = result[1];
    else post.opening = generateOpening(post.html);

    post.html = null;
    post.markdown = null;

    if (filter) {
      const [filterName, filterValue] = filter.split('=');
      if (filterName === 'tag') {
        if (post.tags[0] && arrTags(post).includes(filterValue)) return post;
        return false;
      }
    }
    return post;
  });
};
