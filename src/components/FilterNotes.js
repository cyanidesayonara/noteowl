import React from 'react'

const FilterNotes = ({ filterValue, handleInputChange }) => {
  return (
    <div className='d-none'>
      <input
        placeholder='Filter notes'
        value={ filterValue }
        name='filter'
        onChange={ handleInputChange(null) }
      />
    </div>
  )
}

export default FilterNotes