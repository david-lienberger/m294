import './index.scss';

import React from 'react';
import ReactDOM from 'react-dom/client';


import App from './pages/dashboard/dashboard.page';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ConnectionDetailsComponent from './components/connection-details/connection-details.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/connection/:id",
    element: <ConnectionDetailsComponent />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
