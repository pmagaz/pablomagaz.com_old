import { generateMap } from 'base';
import fetch from 'isomorphic-fetch';
import { AboutModel } from '../models';

const url = 'http://localhost:8000/mocks/logo.json';

export default {

  fetchAbout() {
    return fetch(url)
    .then(req => req.json())
    .then(data => generateMap(data, AboutModel));
  }

};
