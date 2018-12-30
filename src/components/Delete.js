import React from 'react'

const Delete = ({
  note,
  handleRemove,
}) => {
  if (note.author !== '') {
    return null
  }
  return (
    <button type='button' onClick={ handleRemove(note) }>
      Delete
    </button>
  )
}

export default Delete