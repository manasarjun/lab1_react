import React, { useRef, useEffect } from "react";
import '../App.css';

function AddItem({ addItem }) {
  const inputRef = useRef('');

  const handleOnClick = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    addItem(value);
  }

  useEffect(() => {
    inputRef.current.value = '';
  })

  return (
    <>
      <form onSubmit={handleOnClick}>
        <input ref={inputRef} className="inputField" />
        <button onClick={handleOnClick} className="addButton" >Add</button>
      </form>
    </>
  )
}

export default AddItem;
