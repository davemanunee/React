// import React from 'react'

import { useState } from "react";

export function TodoInput(props) {
  const { handleTodoAdd } = props;

  const [inputValue, setInputValue] = useState("");
  //console.log(inputValue)

  return (
    <div className="input-container">
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="Add a task"
      />
      <button onClick={() => {
        if (!inputValue) { return } // gaurd clause if no input, it exits the function
        handleTodoAdd(inputValue)
        setInputValue('')
      }}>
        <i className="fa-solid fa-plus"></i>
      </button>
    </div>
  );
}
