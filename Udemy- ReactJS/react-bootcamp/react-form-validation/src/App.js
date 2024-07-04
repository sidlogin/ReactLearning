import React from "react";
import { Routes, Route } from 'react-router-dom';

import Editor from './containers/Editor';
import Admin from './containers/Admin';
import Home from './containers/Home';
import Layout from './containers/Layout';
import LinkPage from './containers/LinkPage';
import Login from './containers/Login';
import Lounge from './containers/Lounge';
import Missing from './containers/Missing';
import Register from './containers/Register';
import RequireAuth from './containers/RequireAuth';
import Unauthorized from './containers/Unauthorized';

import ProductComponent from "./containers/ProductComponent";
import ProductListing from "./containers/ProductListing";
import ProductDetails from "./containers/ProductDetails";

import './app.css';

const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
};

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        <Route path="product" element={<ProductListing />} />
        <Route path="product/:productid" element={<ProductDetails />} />
        <Route path="productDetails" element={<ProductDetails />} />
        
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={[ROLES.Editor, ROLES.Admin]} />}>
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />

      </Route>
    </Routes>
  );
}

export default App;
