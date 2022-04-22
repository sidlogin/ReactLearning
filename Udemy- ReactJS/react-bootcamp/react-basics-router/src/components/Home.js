import React from 'react';

import Feed from './Feed';

const Home = ({ posts }) => {
  return (
    <>
        {posts.length ? (
            <Feed posts={posts} />
        ) : (
            <p style={{ marginTop: "2rem" }}>
                No posts to display.
            </p>
        )}
    </>
)
}

export default Home;