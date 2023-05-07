import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './pages/dashboard/dashboard.page';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ConnectionDetailsComponent from './pages/connection-details/connection-details.component';
import SearchResultPage from './pages/search-result/search-result.page';

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
    path: "/result",
    element: <SearchResultPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>,
);
