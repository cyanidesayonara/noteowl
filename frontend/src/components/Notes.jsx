import React from 'react'
import Note from './Note'

const Notes = props => {
  const colors = ['yellow', 'blue', 'red', 'green']
  return (
    <div id="notes">
      <button onClick={props.newNote} type="button">
        New note
      </button>
      {props.notes &&
        props.notes.map((note, index) => (
          <Note
            key={note.id}
            note={note}
            user={props.user}
            handleRemove={props.handleRemove}
            handleDrag={props.handleDrag}
            saveNote={props.saveNote}
            handleInputChange={props.handleInputChange}
            index={index}
            colors={colors}
          />
        ))}
    </div>
  )
}

export default Notes
