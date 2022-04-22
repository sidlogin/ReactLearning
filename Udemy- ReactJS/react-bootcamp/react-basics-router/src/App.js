import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from 'react-router';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import Home from './components/Home';
import { format } from 'date-fns';

import { getPosts } from "./data";

const App = () => {
  const [posts, setPosts] = useState(getPosts() || []);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const navigateToPage = useNavigate();

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigateToPage('/');
  }

  const handleDelete = (id) => {
    const filteredPosts = posts.filter(post => post.id !== id);
    setPosts(filteredPosts);
    navigateToPage('/');
  }

  return (
    <div className="App">
        <Header title='React-JS Blog' />
        <Nav search={search} setSearch={setSearch} />
        <main className="Home PostPage NewPost">
          <Routes>
            <Route exact path="/" element={ <Home posts={searchResults} /> } />
            <Route exact path="/post" element={
              <NewPost
                postTitle={postTitle}
                setPostTitle={setPostTitle}
                postBody={postBody}
                setPostBody={setPostBody}
                handleSubmit={handleSubmit}
              />
            } />
            <Route path="/post/:id" element={
              <PostPage posts={posts} handleDelete={handleDelete} />
            } />
            <Route path="about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Outlet />
        </main>
        <Footer />
    </div>
  );
}

export default App;
