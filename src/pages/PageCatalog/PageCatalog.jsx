import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectCamperLoading } from '../../redux/camperSlice';
import { setPageMeta, DEFAULT_TITLE } from '../../meta';
import css from './PageCatalog.module.css';
import Filter from '../../components/Filter/Filter';
import CamperList from '../../components/CamperList/CamperList';
import Loader from '../../components/Loader/Loader';
import BaseButton from '../../components/BaseButton/BaseButton';
import { useCamperLoader } from '../../redux/useCamperLoader';

export default function PageCatalog() {
  const camperLoader = useCamperLoader();
  const loading = useSelector(selectCamperLoading);

  // Load catalog items with no filters
  useEffect(() => {
    camperLoader.loadInitial();
  }, []);

  // Set head meta data on load
  useEffect(() => {
    setPageMeta({ title: DEFAULT_TITLE + ' | Catalog' });
  }, []);

  return (
    <main className="container">
      <div className={css.wrap}>
        <aside className={css.side}>
          <Filter />
        </aside>
        <div className={css.list}>
          <CamperList />
          {loading && <Loader />}
          {!loading && camperLoader.canLoadMore && (
            <BaseButton onClick={camperLoader.loadMore}>Load more</BaseButton>
          )}
        </div>
      </div>
    </main>
  );
}
