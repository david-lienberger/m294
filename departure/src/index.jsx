import './index.scss';
import "react-toastify/ReactToastify.min.css";

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/dashboard/dashboard.page';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ConnectionDetailsComponent from './pages/connection-details/connection-details.component';
import SearchResultPage from './pages/search-result/search-result.page';
import { ToastContainer } from 'react-toastify';
import NotFoundPage from './pages/not-found/not-found.page';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/connection",
    element: <ConnectionDetailsComponent />
  },
  {
    path: "/search",
    element: <SearchResultPage />
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
