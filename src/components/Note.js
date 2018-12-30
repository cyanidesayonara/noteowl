import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Draggable from 'react-draggable'
import Notification from './Notification'
import Date from './Date'
import Delete from './Delete'

const Note = ({
  note,
  handleRemove,
  handleDrag,
  saveNote,
  handleInputChange,
}) => {
  return (
    <Draggable
      cancel='.note form>*'
      position={ note.position }
      bounds='parent'
      onStop={ saveNote(note) }
      onDrag={ handleDrag(note) }
    >
      <div className='note'>
        <Notification message={ note.notification } />
        <form onSubmit={ saveNote(note) }>
          <h3>
            <TextareaAutosize
              onBlur={ saveNote(note) }
              onResize={(e) => {}}
              value={ note.title }
              placeholder='Title'
              onChange={ handleInputChange('title', note) }
            />
            <span className='border'></span>
          </h3>
          <Date date={ note.date } />
          <p>
            <TextareaAutosize
              onBlur={ saveNote(note) }
              onResize={(e) => {}}
              value={ note.content }
              placeholder='Add text here'
              onChange={ handleInputChange('content', note) }
            />
            <span className='border'></span>
          </p>
          <Delete note={ note } handleRemove={ handleRemove } />
        </form>
      </div>
    </Draggable>
  )
}

export default Note