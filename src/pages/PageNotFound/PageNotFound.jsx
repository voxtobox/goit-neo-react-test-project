import { Link } from 'react-router-dom';
import css from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <main>
      <section>
        <div className={css.container}>
          <h2 className={css.text}>{`The page not found.`}</h2>
          <Link to="/" className={css.link}>
            Home Page
          </Link>
        </div>
      </section>
    </main>
  );
}
