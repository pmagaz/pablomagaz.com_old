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
    console.log('makinglist');
    const opening = extractOpening(item.html);
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
