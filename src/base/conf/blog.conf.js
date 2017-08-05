import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isom&oacute;rfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const postOpeningChars= 46;
const codeHighlightDelay = 300;
const postOpeningSplitChar = '@@@';

let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let baseApiUrl;
let PostsApiUrl;
let clientSecret;
let PostsApi;
let PostApi;

if (env === 'development') {
  clientSecret = '285ee4eda6c3';
  SiteUrl = 'http://localhost:8000';
  BlogUrl = `${SiteUrl}/blog`;
  GhostUrl = 'http://localhost:2369';
  ImageUrl = GhostUrl;
  BlogUrl = `${GhostUrl}/blog/`;
  baseApiUrl = `${GhostUrl}/ghost/api/v0.1/`;
  PostsApiUrl = `${SiteUrl}/api/posts/`;
  PostsApi = `${baseApiUrl}posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
  PostApi = `${baseApiUrl}posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;

} else {
  clientSecret = 'eeb1f09c6698';
  SiteUrl = 'http://178.62.245.4';
  BlogUrl = `${SiteUrl}/blog`;
  GhostUrl = 'http://178.62.245.4:2369';
  ImageUrl = GhostUrl;
  BlogUrl = `${GhostUrl}/blog/`;
  baseApiUrl = `${GhostUrl}/ghost/api/v0.1/`;
  PostsApiUrl = `${SiteUrl}/api/posts/`;
  PostsApi = `${baseApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
  PostApi = `${baseApiUrl}slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
} 

export function getPostUrl(slug) {
  return '/blog/' + slug;
}

export const SiteConf = { Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, SiteDescription, ImageUrl, PostApi, PostsApi, PostsApiUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay };