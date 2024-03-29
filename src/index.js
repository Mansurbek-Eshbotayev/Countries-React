import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import "../node_modules/bootstrap/dist/js/bootstrap"
import './assets/Styles/index.scss';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContex';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <ThemeProvider>
    <App />
  </ThemeProvider>
  </BrowserRouter>
);


