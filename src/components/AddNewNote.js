import React from 'react';

const AddNewNote = ({ titleValue, authorValue, contentValue, handleSubmit, handleTitleChange, handleAuthorChange, handleContentChange }) => {
  return (
    <div className="note">
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
        <textarea value={ contentValue } onChange={ handleContentChange }>
        </textarea>
        <button type="submit">
          Add Note
        </button>
      </form>
    </div>
  )
}

export default AddNewNote