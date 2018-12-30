import React from 'react'
import Note from './Note'

const Notes = ({
  notes,
  handleRemove,
  handleDrag,
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
          handleDrag={ handleDrag }
          saveNote={ saveNote }
          handleInputChange={ handleInputChange }
        />
      ) }
    </div>
  )
}

export default Notes