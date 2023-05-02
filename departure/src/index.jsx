import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import LoginPage from './pages/login/login.page';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LoginPage/>
  </React.StrictMode>,
);
