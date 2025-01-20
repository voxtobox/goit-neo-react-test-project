import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './PageNotFound.module.css';
import { setPageMeta, DEFAULT_TITLE } from '../../meta';

export default function PageNotFound() {
  useEffect(() => {
    setPageMeta({ title: DEFAULT_TITLE + ' | Not Found' });
  }, []);

  return (
    <main>
      <section>
        <div className={css.container}>
          <h2 className={css.text}>The page not found.</h2>
          <Link to="/" className={css.link}>
            Home Page
          </Link>
        </div>
      </section>
    </main>
  );
}
