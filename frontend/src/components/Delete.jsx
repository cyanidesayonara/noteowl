import React from 'react'

const Delete = props => {
  if (
    (props.user && props.note.user === props.user.id) ||
    props.note.user === null
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
