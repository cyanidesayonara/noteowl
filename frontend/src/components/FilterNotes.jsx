import React from 'react'

const FilterNotes = props => {
  return (
    <div className="d-none">
      <input {...props.filter} />
    </div>
  )
}

export default FilterNotes
