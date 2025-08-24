import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // ✅ Make sure App.jsx is in same folder
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
