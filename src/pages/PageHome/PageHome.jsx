import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import BaseButton from '../../components/BaseButton/BaseButton';
import { setPageMeta } from '../../meta';
import css from './PageHome.module.css';

export default function PageHome() {
  // Setup head meta data
  useEffect(() => {
    setPageMeta();
  }, []);

  return (
    <main className="container">
      <section className={css.hero}>
        <div className={css.container}>
          <h1 className={css.heroTitle}>Campers of your dreams</h1>
          <h2 className={css.heroSubtitle}>
            You can find everything you want in our catalog
          </h2>
          <Link to="/catalog">
            <BaseButton primary width="173px">
              View Now
            </BaseButton>
          </Link>
        </div>
      </section>
    </main>
  );
}
