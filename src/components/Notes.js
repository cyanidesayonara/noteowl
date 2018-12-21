import React from 'react';
import Note from './Note.js'

const Notes = ({
  notes,
  handleRemove,
  handleSubmit,
  handleInputChange
}) => {
  return (
    <div>
      { notes.map(note =>
        <Note
          key={ note.id }
          note={ note }
          handleRemove={ handleRemove }
          handleSubmit={ handleSubmit }
          handleInputChange={ handleInputChange }
        />
      ) }
    </div>
  )
}

export default Notes