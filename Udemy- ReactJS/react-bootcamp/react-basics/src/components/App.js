import React from 'react';
import { useState, useEffect } from 'react';
import AddItem from './AddItem';

import Content from './ecosystems/Content';
import Footer from './ecosystems/Footer';
import Header from './ecosystems/Header';
import SearchItem from './SearchItem';

import apiRequest from './apiRequest';

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

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id, checked: false, item
    };
    setItem([...items, myNewItem]);

    const params = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(myNewItem)
    }

    const response  = await apiRequest(API_URL, params);
    if (response.ok) setFetchError(response);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  const handleCheck = async (id) => {
      const updateListItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item);
      setItem(updateListItems);

      const selectedItem = updateListItems.filter((item) => item.id === id)
      const params = {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({checked: selectedItem[0].checked})
      }
      const reqUrl = `${API_URL}/${id}`
      const response  = await apiRequest(reqUrl, params);
      if (response.ok) setFetchError(response);
  }

  const handleDelete = async (id) => {
      const updateListItems = items.filter((item) => item.id !== id);
      setItem(updateListItems);

      const params = { method: 'DELETE' }
      const reqUrl = `${API_URL}/${id}`
      const response  = await apiRequest(reqUrl, params);
      if (response.ok) setFetchError(response);
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
