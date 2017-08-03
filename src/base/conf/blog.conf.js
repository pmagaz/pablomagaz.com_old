import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isom&oacute;rfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const postOpeningChars= 46;
const codeHighlightDelay = 200;
const postOpeningSplitChar = '@@@';

let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let baseApiUrl;
let postsApiUrl;
let clientSecret;
let PostsApi;
let PostApi;

console.log(11111, env);

//http://localhost:2368/ghost/api/v0.1/posts/slug/creando-components-de-webpack/?client_id=ghost-frontend&client_secret=808b87eda50b
if (env === 'development') {
  clientSecret = '285ee4eda6c3';
  SiteUrl = 'http://localhost:8000';
  BlogUrl = `${SiteUrl}/blog`;
  GhostUrl = 'http://localhost:2369';
  ImageUrl = GhostUrl;
  BlogUrl = `${GhostUrl}/blog/`;
  baseApiUrl = `${GhostUrl}/ghost/api/v0.1/`;
  postsApiUrl = `${baseApiUrl}posts/`;
  PostsApi = `${postsApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
  PostApi = `${postsApiUrl}slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;

} else {
  clientSecret = 'eeb1f09c6698';
  SiteUrl = 'http://178.62.245.4:8000';
  BlogUrl = `${SiteUrl}/blog`;
  GhostUrl = 'http://178.62.245.4:2369';
  ImageUrl = GhostUrl;
  BlogUrl = `${GhostUrl}/blog/`;
  baseApiUrl = `${GhostUrl}/ghost/api/v0.1/`;
  postsApiUrl = `${baseApiUrl}posts/`;
  PostsApi = `${postsApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
  PostApi = `${postsApiUrl}slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
} 

export function getPostUrl(slug) {
  return '/blog/' + slug;
}

export const SiteConf = { Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, SiteDescription, ImageUrl, postApi, postsApi, postOpeningChars, postOpeningSplitChar, codeHighlightDelay };