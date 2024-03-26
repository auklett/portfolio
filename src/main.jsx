import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import './index.css'

const router = createBrowserRouter([
  {
    path: "/portfolio/",
    element: <App/>,
  },
  {
    path: "/portfolio/popudash",
    element: <PopuDash/>,
  },
]);

import "@fontsource/roboto";
import "@fontsource/outfit";
import "@fontsource/audiowide";
import "@fontsource/quicksand";
import "@fontsource/press-start-2p";
import PopuDash from './pages/PopuDash/PopuDash.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
