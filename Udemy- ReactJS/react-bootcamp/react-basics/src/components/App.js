import React from 'react';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';

import Content from './ecosystems/Content';
import Footer from './ecosystems/Footer';
import Header from './ecosystems/Header';
import SearchItem from './SearchItem';

const App = () => {
  const API_URL = 'http://localhost:3100/items';
  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect will be executed whenever items state get change
  // useEffect(() => {
  //   sessionStorage.setItem('ShoppingList', JSON.stringify(items));
  // }, [items]);

  // useEffect will be only on page load
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const apiResponse = await fetch(API_URL);
        if (!apiResponse.ok) throw Error('Did not receive expected data');
        const listItems = await apiResponse.json();
        setItem(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => fetchItems())();
    }, 2000);
  }, []);

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id, checked: false, item
    };
    setItem([...items, myNewItem]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  const handleCheck = (id) => {
      const updateListItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item);
      setItem(updateListItems);
  }

  const handleDelete = (id) => {
      const updateListItems = items.filter((item) => item.id !== id);
      setItem(updateListItems);
  }

  return (
    <div className='App'>
      <Header title="Groceries List"/>
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem 
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading items...</p>}
        {fetchError && <p style={{color: "red"}}> {`Error: ${fetchError}`} </p>}
        {
          !fetchError && !isLoading && <Content 
            items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase() ) )}
            handleCheck={handleCheck}
            handleDelete={handleDelete}
          />
        }
      </main>
      <Footer length={items.length} />
    </div>
  );
}

export default App;
