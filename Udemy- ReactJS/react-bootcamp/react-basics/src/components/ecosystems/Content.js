import React from 'react'

import ItemList from '../ItemList';

const Content = ({items, handleDelete, handleCheck}) => {
  return (
    <main>
        {items.length ? (
            <ItemList 
                items={items}
                handleCheck={handleCheck}
                handleDelete={handleDelete}
            />
        ) : (
            <p style={ {marginTop: '2rem'} }> Your items is empty</p>
        )}
    </main>
  )
}

export default Content