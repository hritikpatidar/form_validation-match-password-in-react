import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FormValidationRFC from './FormValidationRFC';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FormValidationRFC />
    <App />
  </React.StrictMode>
);

