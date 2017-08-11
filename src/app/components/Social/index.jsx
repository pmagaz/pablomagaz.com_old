import React  from 'react';
import { PropTypes } from 'prop-types';

import LinkButton from 'components/LinkButton';
import styles from './styles.css';


const Social = () => (
    <div className={ styles.socialBox }>

<div  className={ styles.linkedin }></div>
<div  className={ styles.twitter }></div>
<div  className={ styles.email }></div>


  </div>
);

export default Social;