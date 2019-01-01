import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Draggable from 'react-draggable'
import Notification from './Notification'
import Date from './Date'
import Delete from './Delete'

const Note = ({
  note,
  user,
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
              name="title"
              placeholder='Title'
              onChange={ handleInputChange(note) }
            />
            <span className='border'></span>
          </h3>
          <Date date={ note.date } />
          <p>
            <TextareaAutosize
              onBlur={ saveNote(note) }
              onResize={(e) => {}}
              value={ note.content }
              name="content"
              placeholder='Add text here'
              onChange={ handleInputChange(note) }
            />
            <span className='border'></span>
          </p>
          <Delete user={ user } note={ note } handleRemove={ handleRemove } />
        </form>
      </div>
    </Draggable>
  )
}

export default Note