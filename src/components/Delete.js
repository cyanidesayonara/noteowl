import React from 'react'

const Delete = ({
  note,
  user,
  handleRemove,
}) => {
  if (note.user === 0 || user && note.user === user.id) {
    return (
      <button type='button' onClick={ handleRemove(note) }>
        Delete
      </button>
    )
  } else {
    return null
  }
}

export default Delete