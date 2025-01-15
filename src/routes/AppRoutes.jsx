import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const PageHome = lazy(() => import('../pages/PageHome/PageHome'));
const PageCatalog = lazy(() => import('../pages/PageCatalog/PageCatalog'));
const PageCamper = lazy(() => import('../pages/PageCamper/PageCamper'));

export default function AppRoutes() {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/catalog" element={<PageCatalog />} />
        <Route path="/catalog/:id" element={<PageCamper />} />
      </Routes>
    </Suspense>
  );
}
