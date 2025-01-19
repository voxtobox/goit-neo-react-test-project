import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from '../components/Loader/Loader';
const PageHome = lazy(() => import('../pages/PageHome/PageHome'));
const PageCatalog = lazy(() => import('../pages/PageCatalog/PageCatalog'));
const PageCamperDetails = lazy(() =>
  import('../pages/PageCamperDetails/PageCamperDetails')
);

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/catalog" element={<PageCatalog />} />
        <Route path="/catalog/:id" element={<PageCamperDetails />} />
      </Routes>
    </Suspense>
  );
}
