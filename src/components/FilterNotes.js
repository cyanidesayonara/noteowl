import React from 'react'

const FilterNotes = ({ filterValue, handleFilterChange }) => {
  return (
    <div>
      <input
        placeholder="Filter notes"
        value={ filterValue }
        onChange={ handleFilterChange }
      />
    </div>
  )
}

export default FilterNotes