import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Base from './layouts/Base';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Storie from './components/Storie.jsx';
import Home from './components/Home.jsx';
 

import './css/features.css'
import './css/pricing.css'
import './css/storie.css'

 


const router = createBrowserRouter([
  {
      path: '/',
      element: <Base />,
      children: [
        {
          index: true,    
            element: <Home />,
        },
        {
            path: 'gelecek',
            element: <Features />
        },
        {
          path: 'fiyat',
          element: <Pricing />
        },
        {
          path: 'hikaye',
          element: <Storie />
        }
      ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);
