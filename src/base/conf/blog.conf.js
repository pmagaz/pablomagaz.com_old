import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isom&oacute;rfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const SiteUrl = 'http://localhost:8000';
const BlogUrl = `${SiteUrl}/blog`;
const GhostUrl = 'http://localhost:2369';
const ImageUrl = GhostUrl;
const numPosts = 10;
const postOpeningChars= 46;
const codeHighlightDelay = 200;
const postOpeningSplitChar = '@@@';
const blogUrl = `${GhostUrl}/blog/`;
const baseApiUrl = `${GhostUrl}/ghost/api/v0.1/`;
const postsApiUrl = `${baseApiUrl}posts/`;
//const clientSecret = '8628165087ba';
//const clientSecret = '808b87eda50b';
const clientSecret = '285ee4eda6c3';
const postsApi = `${postsApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
const postApi = `${postsApiUrl}slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;

//http://localhost:2368/ghost/api/v0.1/posts/slug/creando-components-de-webpack/?client_id=ghost-frontend&client_secret=808b87eda50b

if (env === 'production') {
  //const clientSecret = '8628165087ba';
  //const clientSecret = '808b87eda50b';
  //BaseUrl = 'http://192.168.1.38:2368';
  //postsApi = `${postsApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
  //ImageUrl = BaseUrl;
} else {
  //const clientSecret = '808b87eda50b';
  //BaseUrl = 'http://192.168.1.38:2368';
  //BaseUrl = 'http://localhost:8000';
  //postsApi = `${postsApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
  //postsApi = `${BaseUrl}/mocks/posts.json`;
  //ImageUrl = 'assets/images/';
  //ImageUrl = BaseUrl;

}

export function getPostUrl(slug) {
  return '/blog/' + slug;
}

export const SiteConf = { Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, SiteDescription, ImageUrl, postApi, postsApi, ImageUrl, blogUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay };