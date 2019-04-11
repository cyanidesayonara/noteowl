import React from 'react'
import Note from './Note'

const Notes = ({
  notes,
  user,
  handleRemove,
  handleDrag,
  saveNote,
  handleInputChange,
  newNote
}) => {
  const colors = ['yellow', 'blue', 'red', 'green']
  return (
    <div id="notes">
      <button onClick={newNote} type="button">
        New note
      </button>
      {notes.map((note, index) => (
        <Note
          key={note.id}
          note={note}
          user={user}
          handleRemove={handleRemove}
          handleDrag={handleDrag}
          saveNote={saveNote}
          handleInputChange={handleInputChange}
          index={index}
          colors={colors}
        />
      ))}
    </div>
  )
}

export default Notes
