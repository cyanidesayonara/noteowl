import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import Draggable from 'react-draggable';

const Note = ({
  note,
  handleRemove,
  handleSubmit,
  handleInputChange,
  position
}) => {
  return (
    <Draggable
      defaultClassName='note'
      cancel='form'
      bounds='parent'
    >
      <div>
        <form onSubmit={ handleSubmit(note) }>
          <h3>
            <TextareaAutosize onResize={(e)=>{}} value={ note.title } placeholder="Title" onChange={ handleInputChange('title', note) } />
            <span className="border"></span>
          </h3>
          <p>
            <TextareaAutosize onResize={(e)=>{}} value={ note.content } placeholder="Add text here" onChange={ handleInputChange('content', note) } />
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