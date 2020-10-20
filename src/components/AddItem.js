import React, { useRef, useEffect } from "react";

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
        <input ref={inputRef} />
        <button onClick={handleOnClick}>Add</button>
      </form>
    </>
  )
}

export default AddItem;
