import Link from 'next/link'
import styles from './style.scss'

export default () =>
    <div id="nav" className={styles.Navigation}>
        <ul className={styles.List}>
            <li className={styles.Element}>
                <Link href="/" className="Element">
                    Index
                </Link>
            </li>
            <li className={styles.Element}>
                <Link href="/about">
                    About
                </Link>
            </li>
        </ul>

    </div>