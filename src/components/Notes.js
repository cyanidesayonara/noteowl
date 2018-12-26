import React from 'react';
import Note from './Note.js'

const Notes = ({
  notes,
  handleRemove,
  saveNote,
  handleInputChange
}) => {
  return (
    <div id='notes'>
      { notes.map(note =>
        <Note
          key={ note.id }
          note={ note }
          handleRemove={ handleRemove }
          saveNote={ saveNote }
          handleInputChange={ handleInputChange }
        />
      ) }
    </div>
  )
}

export default Notes