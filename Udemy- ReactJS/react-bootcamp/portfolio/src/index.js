import React from 'react';
import { createRoot } from "react-dom/client"; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history';
import App from './components/App';
import Users from './components/Users';
import './index.css';

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <Router history={createBrowserHistory()}>
        <Routes>
            <Route exact path='/' element={<App/>} />
            <Route path='/users' element={<Users/>} />
        </Routes>
    </Router>,
    <App />
);