import css from './style.scss';
import Link from 'next/link';

const Component = () => {
  return (
    <div className={css.example}>
      <h1>Index Page</h1>
        <Link href="/about">Link to about</Link>
    </div>
  )
}

export default Component
