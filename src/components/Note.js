import React from 'react';

const Note = ({
  note,
  handleRemove,
  handleSubmit,
  handleInputChange,
}) => {
  return (
    <div className='note'>
      <form onSubmit={ handleSubmit(note) }>
        <h3>
          <input value={ note.title } placeholder="Title" onChange={ handleInputChange('title', note) } />
          { note.title }
        </h3>
        <p>
          <textarea value={ note.content } placeholder="Add text here" onChange={ handleInputChange('content', note) }>
          </textarea>
        </p>
        <button type='submit'>
          Save
        </button>
        <button type='button' onClick={ handleRemove(note) }>
            Delete
        </button>
      </form>
    </div>
  )
}

export default Note