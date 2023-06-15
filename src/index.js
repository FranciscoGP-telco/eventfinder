import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {BrowserRouter} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);


/*
    React: To build the application

    Redux: To manage the state of components in the application

    Redux Thunk: To manage the async flow

    JSON Server: To build a placeholder backend for app development and testing

    React Router: To navigate within the app using URL links

    Bootstrap: To accelerate the development

*/