import React from 'react'

const FilterNotes = ({ filter, handleInputChange }) => {
  return (
    <div className="d-none">
      <input
        placeholder="Filter notes"
        value={filter}
        name="filter"
        onChange={handleInputChange(null)}
      />
    </div>
  )
}

export default FilterNotes
