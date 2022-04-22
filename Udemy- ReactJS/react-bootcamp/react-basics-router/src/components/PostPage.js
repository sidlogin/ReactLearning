import React from 'react';
import { useParams, Link } from "react-router-dom";
import NotFound from './NotFound';

const PostPage = ({posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.filter((post) => post.id && post.id.toString() === id)[0];

  return (
    <>
      <article className='post'>
        { post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.dateTime}</p>
            <p className='postBody'>{post.body}</p>
            <Link to={`/edit/${post.id}`}><button className="editButton">Edit Post</button></Link> &nbsp;
            <button className='button' onClick={() => handleDelete(post.id)}>
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