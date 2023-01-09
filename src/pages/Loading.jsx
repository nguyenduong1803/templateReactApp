import React from 'react';
import styled from 'styled-components';
import styles from './style.module.css';
function Loading() {
  return (
    <div className={`${styles.container} position-fixed full`}>
      <div className={styles.box}>
        <div className={styles.loader}>
          <span></span>
        </div>
        <div className={styles.loader}>
          <span></span>
        </div>
        <div className={styles.loader}>
          <i></i>
        </div>
        <div className={styles.loader}>
          <i></i>
        </div>
      </div>
    </div>
  );
}

export default Loading;
