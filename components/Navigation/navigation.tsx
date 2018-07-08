import Link from 'next/link'
import styles from './style.scss'
import React from 'react';

class Navigation extends React.Component {
    render() {
        return <div id="nav" className={styles.Navigation}>
            <ul className={styles.List}>
                <li className={styles.Element}>
                    <Link>
                        <a href="/">
                            <i class="material-icons">home</i>
                        </a>
                    </Link>
                </li>
                <li className={styles.Element}>
                    <Link>
                        <a href="/about">
                            <i class="material-icons">info</i>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    }
}

export default Navigation;