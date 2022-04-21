import React from 'react';
import { useState } from 'react';
import AddItem from './AddItem';

import Content from './ecosystems/Content';
import Footer from './ecosystems/Footer';
import Header from './ecosystems/Header';
import SearchItem from './SearchItem';

// [
//   {id:1, checked: false, item: 'One'},
//   {id:2, checked: false, item: 'Two'},
//   {id:3, checked: false, item: 'Three'}
// ]

const App = () => {
  const [items, setItem] = useState(
    JSON.parse(sessionStorage.getItem('ShoppingList'))
  );

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  const setAndSaveItems = (newItem) => {
    setItem(newItem);
    sessionStorage.setItem('ShoppingList', JSON.stringify(newItem));
  }

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = {
      id, checked: false, item
    };
    setAndSaveItems([...items, myNewItem]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem)
    setNewItem('');
  }

  const handleCheck = (id) => {
      const updateListItems = items.map((item) => item.id === id ? {...item, checked: !item.checked } : item);
      setAndSaveItems(updateListItems);
  }

  const handleDelete = (id) => {
      const updateListItems = items.filter((item) => item.id !== id);
      setAndSaveItems(updateListItems);
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
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase() ) )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
