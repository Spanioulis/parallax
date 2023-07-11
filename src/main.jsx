import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { CssVanilla, ParallaxJS } from './pages';

const router = createBrowserRouter([
   {
      path: '/',
      element: <App />
   },
   {
      path: '/css',
      element: <CssVanilla />
   },
   {
      path: '/parallax-js',
      element: <ParallaxJS />
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
