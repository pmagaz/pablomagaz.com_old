import env from '../shared/Env';

const Author = 'Pablo Magaz';
const SiteTitle = Author;
const SiteDescription = `Sitio web de ${ Author }`;
const BlogTitle = 'El Blog Isomórfico';
const BlogDescription = `${ BlogTitle }: JavaScript, JavaScript y más JavaScript.`;
const KeyWords = 'javascript, react, redux, vue, rxjs, immutable, webassembly, wasm, microservicios, rust, angular, parcel, webpack, es6, observables, programación reactiva, blog, rxjs, serviceworker, ecma 2018, pwa, progressive web app, nodejs, deno';
const numPosts = 12;
const blogImage = 'https://pablomagaz.com/assets/images/postcover/blog.svg';
const blogTitleImage = 'assets/images/share/ElBlogIsomorfico.png';
const brandTitleImage = 'assets/images/share/PabloMagaz.png';
const postOpeningChars = 46;
const codeHighlightDelay = 850;
const postOpeningSplitChar = '</h2>';
const cookieAceptCookies = 'EBICookies';
const cookiePushNotifications = 'EBIPushNotifications';
const cookieMailSubscription = 'EBIMailSubscription';
const addThisUrl = 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59c0d1b1697ac737';
const socialLinks = {
  linkedIn: 'https://es.linkedin.com/in/pablo-magaz-05b46763',
  twitter: 'https://twitter.com/pablo_magaz',
  gmail: 'magazpablo@gmail.com',
  github: 'https://github.com/pmagaz'
};
const twitterUser = 'pablo_magaz';
const mailListUrl = 'https://pablomagaz.us4.list-manage.com/subscribe/post?u=123e14d6ac1a03bab285de7db&amp;id=055bced07d';
let HostName;
let ServerUrl;
let SiteUrl;
let BlogUrl;
let GhostUrl;
let ImageUrl;
let BaseApiUrl;
let PostsApiUrl;
let RelatedApiUrl;
let clientSecret;
let PostApiUrl;
let PostsApi;
let PostApi;
let Ssl;
let Protocol;
let uniqueImagePath;
let GoogleAnaliticsId;
let DisqusSettings;
let RssUrl;
if (env === 'development') {
  Ssl = false;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'localhost:8000';
  ServerUrl = `http://${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '113542417eed';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://172.104.136.180:2369'; 
  ImageUrl = GhostUrl;
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = 'https://pablomagaz.com/api/post/'; // `${ Protocol }${ HostName }/api/post/`;
  PostsApiUrl = 'https://pablomagaz.com/api/posts/'; // `${ Protocol }${ HostName }/api/posts/`;
  RelatedApiUrl = 'https://pablomagaz.com/api/related/'; // `${ Protocol }${ HostName }/api/related/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at,meta_description&order=published_at desc`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags`;
  GoogleAnaliticsId = 'UA-104300440-3';
  RssUrl = `${ ServerUrl }/rss`;
  DisqusSettings = {
    shortName: 'el-blog-isomorfico',
    identifier: 'el-blog-isomofico-dev'
  };
} else {
  Ssl = true;
  Protocol = Ssl ? 'https://' : 'http://';
  HostName = 'pablomagaz.com';
  ServerUrl = `${ Protocol }${ HostName }`;
  SiteUrl = `${ ServerUrl }`;
  clientSecret = '113542417eed';
  BlogUrl = `${ SiteUrl }/blog`;
  GhostUrl = 'http://localhost:2369';
  ImageUrl = `${ Protocol }${ HostName }`;
  BaseApiUrl = `${ GhostUrl }/ghost/api/v0.1/`;
  PostApiUrl = `${ Protocol }${ HostName }/api/post/`;
  PostsApiUrl = `${ Protocol }${ HostName }/api/posts/`;
  RelatedApiUrl = `${ Protocol }${ HostName }/api/related/`;
  PostsApi = `${ BaseApiUrl }posts/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags&fields=id,uuid,title,slug,html,image,feature_image,tags,updated_at,updated_at,published_at,meta_description&order=published_at desc`;
  PostApi = `${ BaseApiUrl }posts/slug/:slug/?client_id=ghost-frontend&client_secret=${ clientSecret }&include=tags`;
  uniqueImagePath = '/assets/images/postcovers';
  GoogleAnaliticsId = 'UA-104300440-2';
  RssUrl = `${ ServerUrl }/rss`;
  DisqusSettings = {
    shortName: 'el-blog-isomorfico',
    identifier: 'el-blog-isomofico'
  };
}

export const SiteConf = {
  ServerUrl,
  Author,
  SiteTitle,
  SiteUrl,
  numPosts,
  BlogDescription,
  KeyWords,
  BlogTitle,
  BlogUrl,
  blogImage,
  blogTitleImage,
  brandTitleImage,
  SiteDescription,
  ImageUrl,
  PostApi,
  PostsApi,
  PostApiUrl,
  RelatedApiUrl,
  PostsApiUrl,
  postOpeningChars,
  postOpeningSplitChar,
  codeHighlightDelay,
  GoogleAnaliticsId,
  Ssl,
  uniqueImagePath,
  socialLinks,
  DisqusSettings,
  addThisUrl,
  mailListUrl,
  twitterUser,
  cookieAceptCookies,
  cookiePushNotifications,
  cookieMailSubscription,
  RssUrl
};
