import './index.scss';
import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import ReactDOM from 'react-dom/client';
import './i18n';
import { RouterProvider } from 'react-router';
import {createBrowserRouter, createHashRouter} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import App from './pages/dashboard/dashboard.page';
import LoginComponent from './pages/login/login.page';
import ConnectionDetailsComponent from './pages/connection-details/connection-details.component';
import SearchResultPage from './pages/search-result/search-result.page';
import NotFoundPage from './pages/not-found/not-found.page';
import AuthGuard from './guards/auth/auth.guard';
import RequestInterceptor from './interceptors/request.interceptor';
import ResponseInterceptor from './interceptors/response.interceptor';

const requestInterceptor = new RequestInterceptor();
const responseInterceptor = new ResponseInterceptor();
responseInterceptor.setUp();
requestInterceptor.setUp();

export const router = createHashRouter([
  {
    path: '/',
    element: <AuthGuard><App /></AuthGuard>,
  },
  {
    path: '/login',
    element: <LoginComponent />,
  },
  {
    path: '/connection',
    element: <AuthGuard><ConnectionDetailsComponent /></AuthGuard>,
  },
  {
    path: '/search',
    element: <AuthGuard><SearchResultPage /></AuthGuard>,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root') || document.createElement('div'));
root.render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>,
);
