import { createContext, useState, useEffect } from "react";
import api from '../api/posts';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await api.get('/posts');
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
    
    return (
        <DataContext.Provider value={{
            search, setSearch,
            searchResults,
            posts, setPosts
        }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext;