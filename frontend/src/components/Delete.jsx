import React from 'react'

const Delete = props => {
  if (
    props.note.user === null ||
    (props.user && props.note.user.id === props.user.id)
  ) {
    return (
      <button type="button" onClick={props.handleRemove(props.note)}>
        Delete
      </button>
    )
  } else {
    return null
  }
}

export default Delete
