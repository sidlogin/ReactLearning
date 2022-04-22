import React from 'react';
import { useParams, Link } from "react-router-dom";

const PostPage = ({posts, handleDelete}) => {
  const { id } = useParams();
  const post = posts.filter((post) => post.id && post.id.toString() === id)[0];

  console.log(posts, post, id);


  return (
    <>
      <article className='post'>
        { post && 
          <>
            <h2>{post.title}</h2>
            <p className='postDate'>{post.dateTime}</p>
            <p className='postBody'>{post.body}</p>
            <button className='button' onClick={() => handleDelete(post.id)}>
              Delete Post
            </button>
          </>
        }
        { !post &&
          <>
            <h2>Post not found</h2>
            <p>Well, that's disappointing</p>
            <p>
              <Link to="/">Back to Homepage</Link>
            </p>
          </>
        }
      </article>
    </>
  )
}

export default PostPage;