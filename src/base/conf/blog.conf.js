import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isomórfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const postOpeningChars= 46;
const codeHighlightDelay = 300;
const postOpeningSplitChar = '@@@';
const GoogleAnaliticsId = 'aaaaa';

let HostName;
let ServerUrl;
let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let BaseApiUrl;
let PostsApiUrl;
let clientSecret;
let PostApiUrl;
let PostsApi;
let PostApi;
let ContentPath;
let Ssl;
let keysPath;

if (env === 'development') {
  HostName = 'localhost';
  ServerUrl = `http://${ HostName }`;
  clientSecret = '285ee4eda6c3';
  SiteUrl = `${ ServerUrl }:8000`;
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = `${ ServerUrl }:2369`;
  ImageUrl = GhostUrl;
  BlogUrl = `${ GhostUrl }/blog/`;
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${ SiteUrl }/api/post/`;
  PostsApiUrl = `${ SiteUrl }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
  Ssl = true;
  keysPath = null;
} else {
  HostName = '178.62.231.228';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = 'd7d4f5b6725d';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = `${ ServerUrl }:2369`;
  BlogUrl = `${ GhostUrl }/blog/`;
  ImageUrl = `https://${ HostName }`;
  ContentPath = '/var/www/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `https://${ HostName }/api/post/`;
  PostsApiUrl = `https://${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
  Ssl = true;
  keysPath = '';
} 

export const SiteConf = { Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, SiteDescription, ImageUrl, ContentPath, PostApi, PostsApi, PostApiUrl, PostsApiUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay, GoogleAnaliticsId, Ssl, keysPath};
