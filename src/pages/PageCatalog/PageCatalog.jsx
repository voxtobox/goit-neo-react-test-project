import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCamperItems } from '../../redux/camperOps';
import { selectCamperLoading } from '../../redux/camperSlice';
import { setPageMeta, DEFAULT_TITLE } from '../../meta';
import css from './PageCatalog.module.css';
import Filter from '../../components/Filter/Filter';
import CamperList from '../../components/CamperList/CamperList';
import Loader from '../../components/Loader/Loader';

export default function PageCatalog() {
  const dispatch = useDispatch();
  const loading = useSelector(selectCamperLoading);

  useEffect(() => {
    dispatch(fetchCamperItems());
  }, [dispatch]);

  useEffect(() => {
    setPageMeta({ title: DEFAULT_TITLE + ' | Catalog' });
  }, []);

  return (
    (loading && <Loader />) || (
      <main className="container">
        <div className={css.wrap}>
          <aside className={css.side}>
            <Filter />
          </aside>
          <CamperList />
        </div>
      </main>
    )
  );
}
