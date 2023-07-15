import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import { CssVanilla, ReactParallax } from './pages';

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
      path: '/scroll-parallax',
      element: <ReactParallax />
   }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <ParallaxProvider>
         <RouterProvider router={router} />
      </ParallaxProvider>
   </React.StrictMode>
);
