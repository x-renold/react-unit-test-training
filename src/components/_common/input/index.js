import React from 'react';
import styles from './index.module.scss';

const Input = (props) => {
  const { label, error, required, ...rest } = props;

  return (
    <div className={styles.wrapper}>
      <label>
        {label}
        {required
          ? (
            <span style={{ color: 'tomato' }}>&nbsp;*</span>
          ) : null}
      </label>
      <input
        {...rest}
        aria-label={label}
      />
      {error
        ? (
          <span className={styles.error}>{error}</span>
        ) : null}
    </div>
  );
};

export default Input;
