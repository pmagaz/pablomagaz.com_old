import fetch from 'isomorphic-fetch';

import { SiteConf, formatPostContent } from 'base';
import { PostModel } from '../models/';

export default {

  fetchPost (slug) {
   /* 
    setTimeout(function(){
    return fetch(SiteConf.PostApi.replace(':slug', slug))
      .then(req => req.json())
      .then(data => new PostModel(
        formatPostContent(data.posts[0]))
      );
    }, 1000);
  }*/
    
    return fetch(SiteConf.PostApi.replace(':slug', slug))
      .then(req => req.json())
      .then(data => new PostModel(
        formatPostContent(data.posts[0]))
      );
    //.catch(err => window.location = '/404.html')
  },

};
