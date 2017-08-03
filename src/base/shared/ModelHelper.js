import { Map, List } from 'immutable';
import { SiteConf } from '../conf/blog.conf.js';

export const generateMap = (data, model) => (
  data.reduce((acc, item) => (
    acc.set(item.id, new model(item))
  ), new Map())
);

export const generateList = (data, model) => (
  new List(data.map((item) => new model(item)))
);

export const extractOpening = (data) => {
  const reg = new RegExp(`^(.+?)${SiteConf.postOpeningSplitChar}`);
  const opening = reg.exec(data);
  return opening ? opening[1] : false; 
};

export const formatPostContent = (data) => {
  data.html = data.html.replace(SiteConf.postOpeningSplitChar,''); 
  return data;
};

export const getPostListWithOpening = (data, model) => {
  const arr = data.map((item) => {
    const opening = extractOpening(item.html);
    if (opening) item.opening = opening;
    else {
      let i = 0;
      let max = SiteConf.postOpeningChars;
      const words = item.html.split(' ');
      item.opening = '';
      for (i; i <= max ; i++) {
        item.opening += `${words[i]} `;
      }
      item.opening += '...</p>';
      item.html = null;
    }
    return new model(item);
  }
  );
  return new List(arr);
};

export const generateImmutable = (data, model) => (
  Object.keys(data).reduce((acc, key) => {
    let item = data[key];
    return acc.set(item.id, new model(item));
  }, new Map()
  )
);
