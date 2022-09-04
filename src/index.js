import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import GlobalStlyes from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStlyes />
    <App />
  </React.StrictMode>
);

