import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const Contact = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

Contact.propTypes = propTypes;

export default Contact;
