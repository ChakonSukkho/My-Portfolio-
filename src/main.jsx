import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const savedTheme = localStorage.getItem('portfolio-theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
const useLightTheme = savedTheme === 'light' || (!savedTheme && prefersLight);

document.documentElement.classList.toggle('light', useLightTheme);
document.documentElement.classList.toggle('dark', !useLightTheme);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
