import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Router';
import { HelmetProvider } from 'react-helmet-async';
import Authprovider from './Providers/Authprovider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <HelmetProvider>
     <div className='max-w-screen-xl mx-auto'>
     <RouterProvider router={router} />
     </div>
     </HelmetProvider>
     </Authprovider>
  </React.StrictMode>,
)
