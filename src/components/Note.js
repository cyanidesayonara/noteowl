import React from 'react'
import TextareaAutosize from 'react-autosize-textarea'
import Draggable from 'react-draggable'
import Notification from './Notification.js'

const Note = ({
  note,
  handleRemove,
  saveNote,
  handleInputChange,
}) => {
  return (
    <Draggable
      cancel='form>*'
      bounds='parent'
      onStop={ saveNote(note) }
    >
      <div className='note'>
        <Notification
          message={ note.notification }
        />     
        <form onSubmit={ saveNote(note) }>
          <h3>
            <TextareaAutosize onBlur={ saveNote(note) } onResize={(e)=>{}} value={ note.title } placeholder="Title" onChange={ handleInputChange('title', note) } />
            <span className="border"></span>
          </h3>
          <p>
            <TextareaAutosize onBlur={ saveNote(note) } onResize={(e)=>{}} value={ note.content } placeholder="Add text here" onChange={ handleInputChange('content', note) } />
            <span className="border"></span>
          </p>
          <button type='submit'>
            Save
          </button>
          <button type='button' onClick={ handleRemove(note) }>
            Delete
          </button>
        </form>
      </div>
    </Draggable>
  )
}

export default Note