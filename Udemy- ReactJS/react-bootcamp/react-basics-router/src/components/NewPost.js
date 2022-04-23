import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import {format} from 'date-fns';
import api from '../api/posts';
import { useNavigate } from 'react-router';

const NewPost = () => {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const { posts, setPosts } = useContext(DataContext);
    const navigateToPage = useNavigate();

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

    return (
        <>
            <h2>Add New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="postTitle">Title:</label>
                <input
                    id="postTitle"
                    type="text"
                    required
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                />
                <label htmlFor="postBody">Post:</label>
                <textarea
                    id="postBody"
                    required
                    value={postBody}
                    onChange={(e) => setPostBody(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default NewPost