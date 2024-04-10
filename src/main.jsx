import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "../node_modules/jquery/dist/jquery.min.js";
//import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons-font/dist/bootstrap-icons-font.min.css"

const appRoot = document.getElementById('root');

const dom = ReactDOM.createRoot(appRoot)

dom.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
