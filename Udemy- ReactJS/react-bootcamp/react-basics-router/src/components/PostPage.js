import React, { useContext } from 'react';
import { useParams, Link } from "react-router-dom";
import DataContext from '../context/DataContext';
import NotFound from './NotFound';

import api from '../api/posts';
import { useNavigate } from 'react-router';

const PostPage = () => {
  const { posts, setPosts } = useContext(DataContext);
  const { id } = useParams();
  const post = posts.filter((post) => post.id && post.id.toString() === id)[0];
  const navigateToPage = useNavigate();

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
    <>
      <article className='post'>
        { post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.dateTime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link> &nbsp;
            <button className='deleteButton' onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        }
        { !post &&
          <NotFound />
        }
      </article>
    </>
  )
}

export default PostPage;