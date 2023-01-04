import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/Global.css';
import Router from './Components/Router';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyleBody from './style/GlobalStyleBody';
import ThemeProvider from './style/utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <GlobalStyleBody />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);