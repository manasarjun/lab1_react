import React, { useState } from "react";
import AddItem from './AddItem';
import getLocalStorage from '../utils';

function MyList() {

  const init = getLocalStorage();
  const [items, setItem] = useState(init);

  const mapItems = () => {
    return items.map((item, index) => <li key={index}>{item}</li>)
  }

  const addItem = (newItem) => {
    getLocalStorage(newItem)
    setItem([...init, newItem]);
  }

  return (
    <>
      <AddItem addItem={addItem} />
      <h1>ListItems</h1>
      <ol>
        {mapItems()}
      </ol>
    </>
  );
}

export default MyList;
