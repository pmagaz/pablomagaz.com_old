import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const AboutModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const AboutCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.About = new AboutCollection({
    data: generateImmutable( initialState.About.data, AboutModel )
  });
}

export { AboutModel, AboutCollection, setInitialState };
