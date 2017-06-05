import { Record, Map } from 'immutable';
import { generateImmutable } from 'base';

const ContactModel = new Record({
  id: 0,
  alt: '',
  name: '',
  width: 0,
  url: ''
});

const ContactCollection = new Record({ data: new Map() });

function setInitialState(initialState) {
  return initialState.Contact = new ContactCollection({
    data: generateImmutable( initialState.Contact.data, ContactModel )
  });
}

export { ContactModel, ContactCollection, setInitialState };
