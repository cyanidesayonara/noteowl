import React from 'react'
import Delete from './Delete'
import ColorChanger from './ColorChanger'

const NoteControls = props => {
  return (
    <div className="note-controls">
      <Delete
        note={props.note}
        user={props.user}
        handleRemove={props.handleRemove}
      />
      <ColorChanger
        note={props.note}
        handleNoteChange={props.handleNoteChange}
        colors={props.colors}
      />
    </div>
  )
}

export default NoteControls
