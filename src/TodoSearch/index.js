import React from 'react';
import './TodoSearch.css';

function TodoSearch({ searchValue, setSearchValue }) {
  
  const onSearchValueChange = (event) => {
    let inputValue = event.target.value;
    console.log(inputValue);
    setSearchValue(inputValue);
  }
  
  return (
    <input
      className="TodoSearch" 
      placeholder="Buscar tareas..."
      value={ searchValue } 
      onChange={ onSearchValueChange }
    />
  );
}

export { TodoSearch };