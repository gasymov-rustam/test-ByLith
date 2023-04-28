import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Home, Product } from '../../../pages';

export const Paths = {
  HOME: '/',
  PRODUCT: '/product/:id',
  ERROR: '*',
};

const routes = [
  {
    path: Paths.HOME,
    component: Home,
  },
  {
    path: Paths.PRODUCT,
    component: Product,
  },
  {
    path: Paths.ERROR,
    component: Navigate,
  },
];

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, idx) => {
          if (route.path === Paths.ERROR)
            return <Route key={idx} path={route.path} element={<Navigate to={Paths.HOME} />} />;

          return <Route key={idx} path={route.path} element={<route.component />} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
