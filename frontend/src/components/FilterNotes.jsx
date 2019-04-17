import React from 'react'

const FilterNotes = props => {
  return (
    <div className="d-none">
      <input
        placeholder="Filter notes"
        value={props.filter}
        name="filter"
        onChange={props.handleFilterChange}
      />
    </div>
  )
}

export default FilterNotes
