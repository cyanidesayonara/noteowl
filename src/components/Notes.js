import React from 'react';
import Note from './Note.js'

const Notes = ({ notes, handleRemove }) => {
  return (
    <ul>
      { notes.map(note => 
        <Note
          key={ note.id }
          title={ note.title }
          author={ note.author } 
          content={ note.content }
          handleRemove={ handleRemove(note) }
        /> 
      ) }
    </ul>
  )
}

export default Notes