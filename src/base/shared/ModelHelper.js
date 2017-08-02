import { Map, List } from 'immutable';
import { SiteConf } from '../conf/blog.conf.js';

export const generateMap = (data, model) => (
  data.reduce((acc, item) => {
    return acc.set(item.id, new model(item));
  }, new Map()
  )
);

export const generateList = (data, model) => {
  const arr = data.map((item) => {
    return new model(item);
  }
 );
  return new List(arr);
};

export const extractSummary = (data) => {
  const reg = new RegExp(`^(.+?)${SiteConf.postSummarySplitChar}`);
  const summary = reg.exec(data);
  return summary ? summary[1] : false; 
};

export const formatPostContent = (data) => {
  data.html = data.html.replace(SiteConf.postSummarySplitChar,''); 
  return data;
};

export const generateListWithSummary = (data, model) => {
  const arr = data.map((item) => {
    const summary = extractSummary(item.html);
    if (summary) item.summary = summary;
    else {
      let i = 0;
      let max = SiteConf.postSummaryChars;
      const words = item.html.split(' ');
      item.summary = '';
      for (i; i <= max ; i++) {
        item.summary += `${words[i]} `;
      }
      item.summary += '...</p>';
      item.html = null;
    }
    return new model(item);
  }
 );
  return new List(arr);
};

export const generateImmutable = (data, model) => (
  Object.keys(data).reduce( (acc, key) => {
    let item = data[key];
    return acc.set( item.id, new model(item) );
  }, new Map()
  )
);
