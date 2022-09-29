import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';

const ChildComponent = (props) => {
  const { onCheck } = props;

  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  useEffect(() => {
    if (
      (check1 && check2)
      || (check2 && check3)
      || (check3 && check1)
    ) {
      onCheck(true);
    } else {
      onCheck(false);
    }
  }, [check1, check2, check3]);

  return (
    <>
      <div className={styles.container}>
        <label>
          <input type="checkbox" onClick={(event) => setCheck1(event.target.checked)} checked={check1} />
          Check 1
        </label>
        <label>
          <input type="checkbox" onClick={(event) => setCheck2(event.target.checked)} checked={check2} />
          Check 2
        </label>
        <label>
          <input type="checkbox" onClick={(event) => setCheck3(event.target.checked)} checked={check3} />
          Check 3
        </label>
      </div>
    </>
  );
};

export default ChildComponent;
