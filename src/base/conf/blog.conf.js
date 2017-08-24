import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isomórfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const postOpeningChars= 46;
const codeHighlightDelay = 350;
const postOpeningSplitChar = '</h2>';
const GoogleAnaliticsId = 'aaaaa';
const DisqusSettins = {
  shortName: 'el-blog-isomorfico'
};
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
let Protocol;
let uniqueImagePath;

if (env === 'development') {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'localhost:8000';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '285ee4eda6c3';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369'; 
  BlogUrl = `${ GhostUrl }/blog/`;
//  ImageUrl = `${Protocol}${ HostName }`;
  ImageUrl = GhostUrl;
  ContentPath = '/Users/Pablo/js/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${Protocol}${ HostName }/api/post/`;
  PostsApiUrl = `${Protocol}${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
} else {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = '172.104.136.180';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '113542417eed';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369'; 
  BlogUrl = `${ GhostUrl }/blog/`;
  ImageUrl = `${Protocol}${ HostName }`;
  ContentPath = '/var/www/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${Protocol}${ HostName }/api/post/`;
  PostsApiUrl = `${Protocol}${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
  uniqueImagePath = '/assets/images/postcovers';
} 

export const SiteConf = { ServerUrl, Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, SiteDescription, ImageUrl, ContentPath, PostApi, PostsApi, PostApiUrl, PostsApiUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay, GoogleAnaliticsId, Ssl, uniqueImagePath, DisqusSettins };