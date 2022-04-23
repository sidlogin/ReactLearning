import React, { useContext } from 'react';
import Feed from './Feed';
import DataContext from '../context/DataContext';

const Home = () => {
    const { searchResults } = useContext(DataContext);
    return (
        <>
            {searchResults.length ? (
                <Feed posts={searchResults} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </>
    )
}

export default Home;