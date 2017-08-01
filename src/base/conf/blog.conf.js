import env from '../shared/Env';

const siteUrl = 'http://www.pablomagaz.com';
const BaseUrl = 'http://localhost:2368';
const ImageUrl = BaseUrl;
const numPosts = 10;
const blogUrl = `${BaseUrl}/blog/`;
const baseApiUrl = `${BaseUrl}/ghost/api/v0.1/`;
const postsApiUrl = `${baseApiUrl}posts/`;
const clientSecret = '8628165087ba';
//const clientSecret = '808b87eda50b';
const postsApi = `${postsApiUrl}?client_id=ghost-frontend&client_secret=${clientSecret}&include=tags&fields=id,uuid,title,slug,html,image,tags,updated_at&order=created_at desc&limit=${numPosts}`;
const postApi = `${postsApiUrl}slug/:slug/?client_id=ghost-frontend&client_secret=${clientSecret}`;

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

export const SiteConf = { siteUrl, BaseUrl, postApi, postsApi, ImageUrl, blogUrl };