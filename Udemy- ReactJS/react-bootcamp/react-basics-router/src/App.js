import React from "react";
import { Outlet, Route, Routes } from 'react-router';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from "./components/EditPost";
import About from './components/About';
import Missing from './components/Missing';
import Home from './components/Home';

import {DataProvider} from "./context/DataContext";

const App = () => {
  return (
    <div className="App">
      <Header title='React-JS Blog' />
      <DataProvider>
        <Nav />
        <main className="Home PostPage NewPost">
          <Routes>
            <Route exact path="/" element={ <Home /> } />
            <Route exact path="/post" element={ <NewPost /> } />
            <Route path="/edit/:id" element={ <EditPost /> } />
            <Route path="/post/:id" element={ <PostPage /> } />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Outlet />
        </main>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
