import React from 'react';
import styles from './index.module.scss';

const Layout = (props) => {
  const { children } = props;

  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.layout}>
        {children}
      </div>
    </div>
  );
};

export default Layout;
