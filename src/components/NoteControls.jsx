import React from 'react'
import Delete from './Delete'
import ColorChanger from './ColorChanger'

const NoteControls = ({
  user,
  note,
  handleRemove,
  handleInputChange,
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
      />
    </div>
  )
}

export default NoteControls