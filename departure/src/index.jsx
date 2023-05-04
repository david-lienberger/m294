import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import DashboardPage from './pages/dashboard/dashboard.page';
import App from './pages/login/login.page';
import { RouterProvider } from 'react-router';
import { createBrowserRouter } from 'react-router-dom';
import ConnectionDetailsComponent from './components/connection-details/connection-details.component';

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage/>
  },
  {
    path: "/login",
    element: <App />
  },
  {
    path: "/connection",
    element: <ConnectionDetailsComponent />
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RouterProvider router={router} />
  </>,
);
