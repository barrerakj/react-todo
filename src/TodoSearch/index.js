import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue);
    setSearchValue(inputValue);
  }
  
  return (
    <input
      className="TodoSearch" 
      placeholder="Search todos..."
      value={ searchValue } 
      onChange={ onSearchValueChange }
    />
  );
}

export { TodoSearch };