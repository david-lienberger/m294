import './index.scss';
import "react-toastify/ReactToastify.min.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n';
import App from './pages/dashboard/dashboard.page';
import LoginComponent from './pages/login/login.page';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ConnectionDetailsComponent from './pages/connection-details/connection-details.component';
import SearchResultPage from './pages/search-result/search-result.page';
import { ToastContainer } from 'react-toastify';
import NotFoundPage from './pages/not-found/not-found.page';
import AuthGuard from './guards/auth/auth.guard';
import RequestInterceptor from './interceptors/request.interceptor';
import ResponseInterceptor from './interceptors/response.interceptor';

const requestInterceptor = new RequestInterceptor();
const responseInterceptor = new ResponseInterceptor();
responseInterceptor.setUp();
requestInterceptor.setUp();


const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthGuard><App /></AuthGuard>
  },
  {
    path:"/login",
    element: <LoginComponent/>
  },
  {
    path: "/connection",
    element: <AuthGuard><ConnectionDetailsComponent /></AuthGuard>
  },
  {
    path: "/search",
    element: <AuthGuard><SearchResultPage /></AuthGuard>
  },
  {
    path: "*",
    element: <NotFoundPage />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>,
);
