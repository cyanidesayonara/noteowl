import React from 'react';
import Notification from './Notification.js'
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
      <Notification
        message={ notification }
      />
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