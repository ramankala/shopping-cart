import React from 'react';
import ReactDOM from 'react-dom/client';
import RouteSwitch from './RouteSwitch';
import { HashRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HashRouter>
        <RouteSwitch />
    </HashRouter>
);