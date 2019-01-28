import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Draggable from 'react-draggable'
import Notification from './Notification'
import NoteDate from './NoteDate'
import NoteControls from './NoteControls.js'

const Note = ({
  note,
  user,
  handleRemove,
  handleDrag,
  saveNote,
  handleInputChange,
  index,
  colors,
}) => {
  const zIndex = 8000 + index
  const divStyle = {
    zIndex: zIndex,
  }
  return (
    <Draggable
      cancel='.note form>*'
      position={ note.position }
      bounds='parent'
      onStop={ saveNote(note) }
      onDrag={ handleDrag(note) }
    >
      <div
        className={ 'note color-' + note.color }
        style={ divStyle }
      >
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
          <NoteDate text='Created: ' date={ note.created } />
          <NoteDate text='Saved: ' date={ note.updated } />
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
          <NoteControls
            user={ user }
            note={ note }
            handleRemove={ handleRemove }
            colors={ colors }
            handleInputChange={ handleInputChange }
            saveNote={ saveNote }
          / >
        </form>
      </div>
    </Draggable>
  )
}

export default Note