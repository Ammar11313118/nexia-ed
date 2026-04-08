import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';


import './assets/styles.css'; // Add Tailwind styles if configured

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>

        <Home />
    </React.StrictMode>
);