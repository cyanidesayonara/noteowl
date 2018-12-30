import React from 'react'

const FilterNotes = ({ filterValue, handleFilterChange }) => {
  return (
    <div className="d-none">
      <input
        placeholder="Filter notes"
        value={ filterValue }
        onChange={ handleFilterChange }
      />
    </div>
  )
}

export default FilterNotes