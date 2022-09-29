import React, { useEffect, useState } from 'react';
import { getUsers } from './services';
import styles from './index.module.scss';

const ApiTest = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((res) => {
        if (res?.data) {
          setUsers(res.data);
        }
      })
  }, []);

  return (
    <div className={styles.api_test_wrapper}>
      <div className="title">Users</div>
      <div className={styles.grid}>
        {users.map((user) => (
          <div key={user?.id} className={styles.user_card}>
            <div className={styles.card_title}>{user.name}</div>
            <div className={styles.card_text}>{user.company?.name}</div>
            <div className={styles.card_text}>{user.address?.street}, {user.address?.city}</div>
            <footer>
              <div className={`${styles.card_text} link`}>{user.email}</div>
            </footer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiTest;
