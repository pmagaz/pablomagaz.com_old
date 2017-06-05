import React  from 'react';
import { PropTypes } from 'prop-types';

const propTypes= {
  name: PropTypes.string.isRequired
};

const About = ({ name }) => {

  return (
    <div>
      Hello { name } Container !
    </div>
  );
};

About.propTypes = propTypes;

export default About;
