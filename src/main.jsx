import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import "@fontsource/roboto";
import "@fontsource/outfit";
import "@fontsource/audiowide";
import "@fontsource/quicksand";
import "@fontsource/press-start-2p";

import { BrowserRouter } from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
