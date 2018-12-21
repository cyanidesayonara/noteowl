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
        <span>
          Title:
        </span>
        <input value={ note.title } onChange={ handleInputChange('title', note) } />
        <span>
          Author:
        </span>
        <input value={ note.author } onChange={ handleInputChange('author', note) } />
        <span>
          Text:
        </span>
        <textarea value={ note.content } onChange={ handleInputChange('content', note) }>
        </textarea>
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