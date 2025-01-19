import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCamperItems } from './redux/camperOps';
import css from './PageCatalog.module.css';
import Filter from '../../components/Filter/Filter';
import CamperList from '../../components/CamperList/CamperList';

export default function PageCatalog() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamperItems());
  }, [dispatch]);

  return (
    <main className="container">
      <div className={css.wrap}>
        <aside className={css.side}>
          <Filter />
        </aside>
        <CamperList />
      </div>
    </main>
  );
}
