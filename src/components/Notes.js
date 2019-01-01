import React from 'react'
import Note from './Note'

const Notes = ({
  notes,
  user,
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
          user={ user }
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