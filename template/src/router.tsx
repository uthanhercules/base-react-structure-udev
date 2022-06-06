import React from 'react';
import { IProtectedRoutes } from './types/routeTypes';
import {
  BrowserRouter,
  Routes,
  Outlet,
  Route,
  Navigate,
} from 'react-router-dom';

import Home from './views/Home';

const ProtectedRoutes = ({ routePath }: IProtectedRoutes) => {
  const isAuth: boolean = true; // Protection Function here
  return isAuth ? <Outlet /> : <Navigate to={routePath} />;
};

const RouterOutlet = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />}>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='/home' />
        </Route>

        <Route element={<ProtectedRoutes routePath='/' />}>
          {/* Protected Routes */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterOutlet;
