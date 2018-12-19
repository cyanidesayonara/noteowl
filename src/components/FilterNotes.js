import React from 'react';

const FilterNotes = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      <span>
        Search notes:
      </span>
      <input
        value={ filterValue }
        onChange={ handleFilterChange }
      />
    </div>         
  )
}

export default FilterNotes