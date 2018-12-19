import React from 'react';

const AddNewNote = ({ titleValue, authorValue, textValue, handleSubmit, handleTitleChange, handleAuthorChange, handleTextChange }) => {
  return (
    <form onSubmit={ handleSubmit }>
      <span>
        Title:
      </span>
      <input value={ titleValue } onChange={ handleTitleChange } />
      <span>
        Author:
      </span>
      <input value={ authorValue } onChange={ handleAuthorChange } />
      <span>
        Text:
      </span>
      <textarea value={ textValue } onChange={ handleTextChange }>
      </textarea>
      <button type="submit">
        Add Note
      </button>
    </form>
  )
}

export default AddNewNote