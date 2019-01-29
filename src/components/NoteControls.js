import React from 'react'
import Delete from './Delete'
import ColorChanger from './ColorChanger.js'

const NoteControls = ({
  user,
  note,
  handleRemove,
  handleInputChange,
  saveNote,
  colors,
}) => {
  return (
    <div className='note-controls'>
      <Delete
        note={ note }
        user={ user }
        handleRemove={ handleRemove }
      />
      <ColorChanger
        note={ note } 
        handleInputChange={ handleInputChange }
        colors={ colors }
        saveNote={ saveNote }
      />
    </div>
  )
}

export default NoteControls