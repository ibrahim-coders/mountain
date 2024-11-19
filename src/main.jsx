import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import router from './components/router/router';
import { RouterProvider } from 'react-router-dom';
import AuthProvider from './components/AuthContext/AuthProvider ';
import { HelmetProvider } from 'react-helmet-async';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>
);
