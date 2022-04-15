import React from 'react';
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createBrowserHistory } from 'history';

import App from './components/App';
import Users from './components/Users';
import Header from './components/common/Header';

import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Router history={createBrowserHistory()}>
        <Routes>
            <Route exact path='/' element={<Header> <App /></Header>}  />
            <Route path='/users' element={<Header> <Users /></Header>} />
        </Routes>
    </Router>,
    <App />
);