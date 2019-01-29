import React from 'react'

const Delete = ({
  note,
  user,
  handleRemove,
}) => {
  if ((user && note.user === user.id) || note.user === null) {
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