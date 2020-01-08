import needle from 'needle';
import { SiteConf } from 'base';

export const postsApiHandler = async (req, res) => {
  let params;
  const { filter } = req.params;
  const limit = filter && filter.includes('limit') ? filter : `limit=${ SiteConf.numPosts }`;
  
  if (!filter || !filter.includes('tag')) {
    params = `${ limit }&${ filter }`;
  } else {
    params = `limit=100&${ filter }`;
  }
  
  const postLists = await needle('get', `${ SiteConf.PostsApi }&${ params }`);
  const { body } = postLists;
  if (body.errors) res.status(404).json({ posts: [] });
  else {
    const { pagination } = body.meta;
    const posts = PostList(body.posts, filter);
    const result = { posts, pagination };
    if (posts.length) res.json(result);
    else res.status(404).json({ posts: [] });
  }
};

export const relatedPostApiHandler = async (req, res) => {
  const { slug, tag } = req.params;
  const PostLists = await needle('get', `${ SiteConf.PostsApi }&limit=100`);
  const { body } = PostLists;
  if (body.errors) res.status(404).json({ posts: [] });
  else {
    const { posts } = body;
    let key = 0;
    const ran = Math.floor(Math.random() * posts.length-2);
    let related = posts.filter(post => {
      key += 1;
      if ((post.tags[0].slug === tag || (post.tags[1] && post.tags[1].slug === tag)) && post.slug !== slug) return true;
    }).map(post => {
      const { slug, feature_image, title } = post;
      return { slug, feature_image, title };
    });
    
    if (related.length === 0) {
      const { slug, feature_image, title } = posts[ran];
      related = [{ slug, feature_image, title }];
    }
    
    if (related.length > 0) res.json(related);
    else res.status(404).json([]);
  }
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
