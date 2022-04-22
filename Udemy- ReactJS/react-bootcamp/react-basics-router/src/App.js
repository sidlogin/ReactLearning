import React from "react";
import { useState, useEffect } from "react";
import { Outlet, Route, Routes, useNavigate } from 'react-router';

import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import EditPost from "./components/EditPost";
import About from './components/About';
import Missing from './components/Missing';
import Home from './components/Home';
import { format } from 'date-fns';
import api from './api/posts';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editTitle, setEditTitle] = useState('');
  const [editBody, setEditBody] = useState('');
  const navigateToPage = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        // console.log(response);
        if (response) {
          setPosts(response.data);
        }
      } catch (err) {
        if(err.response) {
          console.log(err.response.data, err.response.status, err.response.header);
        } else {
          console.log(`Error: ${err.message}`);
        }
      } finally {}
    }
    fetchPosts();
  }, []);

  useEffect(() => {
    const filteredResults = posts.filter((post) =>
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = { id, title: postTitle, datetime, body: postBody };
    try {
      const response = await api.post('/posts', newPost);
      const allPosts = [...posts, response.data];
      setPosts(allPosts);
      setPostTitle('');
      setPostBody('');
      navigateToPage('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }

  const handleEdit = async (id) => {
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const updatedPost = { id, title: editTitle, datetime, body: editBody };
    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map(post => post.id === id ? { ...response.data } : post));
      setEditTitle('');
      setEditBody('');
      navigateToPage('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  }


  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const filteredPosts = posts.filter(post => post.id !== id);
      setPosts(filteredPosts);
      navigateToPage('/');
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
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
            <Route path="/edit/:id" element={
              <EditPost
                posts={posts}
                handleEdit={handleEdit}
                editTitle={editTitle}
                setEditTitle={setEditTitle}
                editBody={editBody}
                setEditBody={setEditBody}
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
