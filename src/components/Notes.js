import React from 'react';
import Note from './Note.js'

const Notes = ({ notes }) => {
  return (
    <ul>
      { notes.map(note => <Note
          key={ note.id }
          title={ note.title }
          author={ note.author } 
          text={ note.text }
        /> 
      )}
    </ul>
  )
}

export default Notes