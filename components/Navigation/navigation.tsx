import React from 'react';
import Link from 'next/link';
import styles from './style.scss';

function Navigation() {
  return (
    <div id="nav" className={styles.Navigation}>
      <ul className={styles.List}>
        <li className={styles.Element}>
          <Link to="/">
            <a href="/">
              <i className="material-icons">
                home
              </i>
            </a>
          </Link>
        </li>
        <li className={styles.Element}>
          <Link to="/about">
            <a href="/about">
              <i className="material-icons">
                info
              </i>
            </a>
          </Link>
        </li>
        <li className={styles.Element}>
          <Link to="/components">
            <a href="/components">
              <i className="material-icons">
                featured_play_list
              </i>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
}


export default Navigation;
