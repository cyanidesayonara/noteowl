import React from 'react';
import Note from './Note.js'

const Notes = ({
  notification,
  notes,
  handleRemove,
  handleSubmit,
  handleInputChange
}) => {
  return (
    <div id='notes'>
      { notes.map(note =>
        <Note
          key={ note.id }
          note={ note }
          handleRemove={ handleRemove }
          handleSubmit={ handleSubmit }
          handleInputChange={ handleInputChange }
          notification={ notification }
        />
      ) }
    </div>
  )
}

export default Notes