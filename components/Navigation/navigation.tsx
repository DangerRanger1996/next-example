import Link from 'next/link'
import styles from './style.scss'

export default () =>
    <div id="nav" className={styles.Navigation}>
        <Link href="/about">About </Link>
        <Link href="/">Index</Link>
    </div>