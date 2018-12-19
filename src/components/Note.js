import React from 'react';

const Note = ({ title, author, text, handleRemove }) => {
  return (
    <li>
      <h2>
        Title: { title }
      </h2>
      <h3>
        Author: { author }
      </h3>
      <p>
        { text }
      </p>
      <button onClick={ handleRemove }>
        Delete
      </button>
    </li>
  )
}

export default Note