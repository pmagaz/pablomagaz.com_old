import React  from 'react';
import styles from './styles.css';

const Loading = () => (
  <div className={ styles.spinner } >
    <div className={ styles.bounce1 }></div>
    <div className={ styles.bounce1 }></div>
    <div className={ styles.bounce1 }></div>
  </div>
);

export default Loading;
