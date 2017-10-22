import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author; 
const SiteDescription = Author;
const BlogTitle = 'El Blog Isomórfico';
const BlogDescription = 'JavaScript, programaci&oacute;n y mas';
const numPosts = 10;
const blogImage = 'assets/images/postcover/blog.svg';
const blogTitleImage = 'assets/images/BlogTitle.png';
const postOpeningChars= 46;
const codeHighlightDelay = 350;
const postOpeningSplitChar = '</h2>';
const addThisUrl = 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c0d1b1697ac737';
const socialLinks = {
  linkedIn: 'https://es.linkedin.com/in/pablo-magaz-05b46763',
  twitter: 'https://twitter.com/pablo_magaz',
  gmail: 'magazpablo@gmail.com',
  github: 'https://github.com/pmagaz'
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
let GoogleAnaliticsId;
let DisqusSettins;

if (env === 'development') {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'localhost:8000';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '285ee4eda6c3';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369'; 
  ImageUrl = GhostUrl;
  ContentPath = '/Users/Pablo/js/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${Protocol}${ HostName }/api/post/`;
  PostsApiUrl = `${Protocol}${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
  GoogleAnaliticsId = 'UA-104300440-3';
  DisqusSettins = {
    shortName: 'el-blog-isomorfico',
    identifier: 'el-blog-isomofico-dev'
  };
} else {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = '172.104.136.180';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '113542417eed';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369'; 
  ImageUrl = `${Protocol}${ HostName }`;
  ContentPath = '/var/www/ghost/content';
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${Protocol}${ HostName }/api/post/`;
  PostsApiUrl = `${Protocol}${ HostName }/api/posts/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at&order=published_at desc&limit=${numPosts}`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags`;
  uniqueImagePath = '/assets/images/postcovers';
  GoogleAnaliticsId = 'UA-104300440-2';
  DisqusSettins = {
    shortName: 'el-blog-isomorfico',
    identifier: 'el-blog-isomofico'
  };
} 

export const SiteConf = { ServerUrl, Author, SiteTitle, SiteUrl, BlogDescription, BlogTitle, BlogUrl, blogImage, blogTitleImage, SiteDescription, ImageUrl, ContentPath, PostApi, PostsApi, PostApiUrl, PostsApiUrl, postOpeningChars, postOpeningSplitChar, codeHighlightDelay, GoogleAnaliticsId, Ssl, uniqueImagePath, socialLinks, DisqusSettins, addThisUrl };