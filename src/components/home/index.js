import React, { useState } from 'react';
import styles from './index.module.scss';

const Home = () => {
  const [showBtn, setShowBtn] = useState(false);

  return (
    <div className={styles.home_wrapper}>
      <div className={styles.home}>
        <div className="title">Home</div>
        <button className="button primary" onClick={() => setShowBtn((prev) => !prev)}>
          Click me
        </button>
        {showBtn
          ? (
            <div className={styles.yay}>Yay, You clicked me...!!</div>
          ) : null}
      </div>
    </div>
  );
};

export default Home;
